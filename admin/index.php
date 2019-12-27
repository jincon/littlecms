<?php
header("Content-type:text/html;charset=utf-8");

include("../include/function.php");
include_once("../config.php");
include_once 'include/include.php';

//修改参数部分
$tplnum = 10; //模板数量，需要修改的地方
$rowsPerPage = 20;  //每页显示数
//end

$tplnumArr = range(1,10);
if(!isset($_SESSION['is_qx_worker']) || $_SESSION['is_qx_worker'] != 'yes'){
    setcookie ("referer",'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'],time() + 3600,'/');
    header("Location:login.php");
    exit;
}
//编辑显示页
if(isset($_GET['id']) && $_GET['id']){
	$listdata = $db->getOne("select * from content where id = ".intval($_GET['id']));
}

//默认首页显示。


$curPage = isset($_GET['page'])?intval($_GET['page']):1;
//获得数据
$offset = ($curPage-1)*$rowsPerPage;
$sql = ' where 1=1 ';
$cid = isset($_GET['cid']) && $_GET['cid'] ? intval($_GET['cid']) : 0 ;
if($cid){
    $sql .= ' and (pcid = '.$_GET['cid'].' or cid = '.$_GET['cid'].')';
}
if(isset($_GET['key']) && $_GET['key']){
    $sql .= 'and title like "%'.$_GET['key'].'%"';
}

$list = $db->getAll("select * from content ".$sql." order by id desc limit $offset,$rowsPerPage");
$arr = $db->getOne('select count(*) total from content '.$sql);
$totalRows=$arr['total'];
$totalpage =ceil($totalRows/$rowsPerPage);
//end

//批量操作部分代码：
if(isset($_GET['act']) && $_GET['act']== 'alldo'){
    if(isset($_POST['all']) && $_POST['all']=='del'){
        $ids = isset($_POST['ids']) && $_POST['ids']?$_POST['ids']:'';
        if(!$ids){
            echo "<script>alert('请勾选要删除的项目');location.href='index.php'</script>";exit;
        }
        $listdata = $db->query("delete from content where `id` in( ".implode(',',$ids).")");
        echo "<script>alert('批量删除成功');location.href='index.php'</script>";exit;
        exit('del');
    }else{
        //tpl
        //编辑
        foreach($_POST['tpl'] as $_k=>$_v){
            $sql = "UPDATE content set content = '".$_v."' where id=".$_k;
            $db->query($sql);
        }
        echo "<script>alert('批量编辑成功');location.href='index.php'</script>";exit;
    }
}



//删除
if(isset($_GET['act']) && $_GET['act']== 'del'){
	$listdata = $db->query("delete from content where `id` = ".intval($_GET['id'])."");
	echo "<script>alert('删除成功');location.href='index.php'</script>";exit;
}


function tree($link,&$treeList=array(),$pid = 0,$count = 0) {//$link为数据库连接，&$treeList为输出数组，因为需要累积结果，所以加上引用
    $count+=2;//count为识别分级深度的标识
    $result = $link->getAll("SELECT * FROM cat WHERE pid={$pid}");
    foreach($result as $row){
        $row['count'] = $count;
        $row['name'] = str_repeat('&nbsp;', $count).'|－'.$row['name']; //通过分级深度的标识，来给分类缩进效果
        $treeList[] = $row;//把查询到的结果存储起来　　　　　　　　　　　　　　　　　　　　　　　　　
        tree($link,$treeList,$row['id'],$count);    //再次调用自身，这时的pid为上一条数据的id从而找到上一条数据的子分类;
    }
    return $treeList;   //输出结果
}
$values=tree($db);
$cidhtml = '';
foreach ($values as $key => $value) {
    $cidhtml .= '<option value="'.$value['id'].'" '.($cid==$value['id']?'selected':'').'>'.$value['name'].'</option>';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="gbk">
    <title>首页列表</title>
    <link rel="stylesheet" href="./bootstrap.css">
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>
<body>
<script language="javascript" type="text/javascript" src="./js/WdatePicker.js"></script>

<div class="container col-md-8 col-md-offset-2">

    <?php include ("nav.php");?>

    <!--<div class="panel panel-default">
        <div class="panel-heading">批量导入</div>
        <form action="?act=import" method="post" enctype="multipart/form-data">
            <div class="panel-body">
                <input type="file" name="file"> 请选择txt的文件，格式：用户名 模板id，例：张三 3
                <div class="text-center">
                    <button type="submit" class="btn btn-default btn-lg active">提交</button>
                </div>
            </div>
        </form>
    </div>-->


    <form class="form-horizontal" action="" method="get">
        <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">搜索：标题</label>
            <div class="col-sm-2">
                <select class="form-control" name="cid">
                    <option value="0" <?php if(isset($listdata['cid']) && $listdata['cid'] == 0){echo "selected";}?>>全部</option>
                    <?php echo $cidhtml; ?>
                </select>
            </div>
            <div class="col-sm-4">
                <input type="text" class="form-control" value="" name="key" id="inputEmail3" placeholder="请输入标题">
            </div>
            <div class="col-sm-4">
                <button type="submit" class="btn btn-default active" style="height: 35px;">搜索</button>
            </div>
        </div>
    </form>
    <form class="form-horizontal" action="?act=alldo" method="post">
    <table class="table col-md-6 table-bordered table-hover table-striped">
        <tr class="bg-primary">
            <thead>
            <th>序号</th>
            <th>标题</th>
            <th>分类</th>
            <th>时间</th>
            <th>操作</th>
            </thead>
        </tr>
		<?php 
		if(isset($list)){foreach($list as $v){ ?>
		<tr>
			<td><input type="checkbox" name="ids[]" value="<?php echo $v['id']?>"> <?php echo $v['id']?></td>
            <td><?php echo $v['title']?></td>
            <td><?php $cat = $db->getOne("select `name` from cat where id = ".$v['cid']);echo isset($cat['name'])?$cat['name']:'未分类';?></td>
            <td><?php echo $v['dateline'];?></td>
            <td><a href="edit.php?id=<?php echo $v['id']?>">编辑</a> | <a href="?act=del&id=<?php echo $v['id']?>" onClick="javascript:if(!confirm('确定删除吗？')){return false;}">删除</a></td>
		</tr>
		<?php }} ?>
<!--        <button class="btn btn-default" type="submit" name="all" value="edit" style="margin-bottom: 10px">批量编辑</button>-->
        <button class="btn btn-default" type="submit" name="all" value="del" style="margin-bottom: 10px;margin-left:10px;" onclick="javascript:if(confirm('你确定要批量删除嘛')){return true;}else{return false}">批量删除</button> （注意:删除需要勾选，编辑可不用勾选）
    </table>
        <?php

        //存储页码字符串
        $pageNumString = "";
        if($curPage <=5){
            $begin =1;
            $end = $totalpage>=10?10:$totalpage;
        }else{
            $end = $curPage +5>$totalpage?$totalpage:$curPage +5;
            $begin =$end -9<=1?1:$end -9;
        }
        //实现上一页
        $prev = $curPage -1<=1?1:$curPage -1;
        $pageNumString .="<li><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."&page=1'>首页</a></li>";
        $pageNumString .="<li><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."&page=$prev'>&laquo;</a></li>";


        //根据起始页与终止页将当前页面的页码显示出来
        for($i=$begin;$i<=$end;$i++){
//使用if实现高亮显示当前点击的页码
            if($curPage == $i){
                $pageNumString .= "<li class='active'><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."&page=$i'>$i</a></li>";
            }else{
                $pageNumString .= "<li><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."&page=$i'>$i</a></li>";
            }
        }
        //实现下一页
        $next = $curPage +1 >=$totalpage?$totalpage:$curPage +1;
        $pageNumString .="<li><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."page=$next'>&raquo;</a></li>";
        $pageNumString .="<li><a href='?key=".(isset($_GET['key'])?$_GET['key']:'')."&page=$totalpage'>尾页</a></li>";
        ?>
        <ul class="pagination">
            <?php echo $pageNumString;?>
        </ul>
    </form>
</div>
</body>
</html>