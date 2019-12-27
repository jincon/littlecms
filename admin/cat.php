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
    $listdata = $db->getOne("select * from cat where id = ".intval($_GET['id']));
}

//默认首页显示。


$curPage = isset($_GET['page'])?intval($_GET['page']):1;
//获得数据
$offset = ($curPage-1)*$rowsPerPage;
$sql = '';
if(isset($_GET['key']) && $_GET['key']){
    $sql = ' where title like "%'.$_GET['key'].'%" or url like "%'.$_GET['key'].'%"';
}

$list = $db->getAll("select * from cat ".$sql." order by id desc limit $offset,$rowsPerPage");
$arr = $db->getOne('select count(*) total from cat '.$sql);
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
        $listdata = $db->query("delete from cat where `id` in( ".implode(',',$ids).")");
        echo "<script>alert('批量删除成功');location.href='link.php'</script>";exit;
        exit('del');
    }
}

//编辑、插入保存
if(isset($_GET['act']) && $_GET['act']== 'save'){
    $id = isset($_POST['id']) && $_POST['id']? intval($_POST['id']):'';
    $pid = isset($_POST['pid']) && $_POST['pid']? intval($_POST['pid']):'';
    $name = isset($_POST['name']) && $_POST['name']?addslashes($_POST['name']):'';
    $link = isset($_POST['link']) && $_POST['link']?addslashes($_POST['link']):'';
    if(!$name){
        echo "<script>alert('名称请填写完整')</script>";exit;
    }
    if($id){
        $sql = "UPDATE cat set `name` = '".$name."',`link` = '".$link."',`pid` = '".$pid."' where id=".$id;
    }else{
        $sql = "insert into cat set `name`= '".$name."',`link` = '".$link."',`pid` = '".$pid."'";
    }
    $db->query($sql);
    echo "<script>alert('操作成功');location.href='cat.php'</script>";exit;
    exit;
}


//删除
if(isset($_GET['act']) && $_GET['act']== 'del'){
    $listdata = $db->query("delete from cat where `id` = ".intval($_GET['id'])."");
    echo "<script>alert('删除成功');location.href='cat.php'</script>";exit;
}

$catdata = $db->getAll("select * from cat");
$catdata = getTree($catdata);
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

    <form class="form-horizontal" action="" method="get">
        <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">搜索：分类名称</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" value="" name="key" id="inputEmail3" placeholder="请输入分类名称">
            </div>
            <div class="col-sm-6">
                <button type="submit" class="btn btn-default active" style="height: 35px;">搜索</button>
            </div>
        </div>
    </form>
    <div class="panel panel-default">
        <div class="panel-heading">添加/修改分类</div>
        <div class="panel-body">
            <form class="form-horizontal" action="?act=save" method="post">
                <input type="hidden" name="id" value="<?php echo isset($_GET['id'])?$_GET['id']:'';?>">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">分类</label>
                    <div class="col-sm-3">
                        <select class="form-control" name="pid">
                            <option value="0" <?php if(isset($listdata['pid']) && $listdata['pid'] == 0){echo "selected";}?>>顶级分类</option>
                            <?php foreach($catdata as $k=>$v){ ?>
                                <option value="<?php echo $v['id']?>" <?php if(isset($listdata['pid']) && $listdata['pid'] == $v['id']){echo "selected";}?>><?php echo $v['flag'].$v['name']?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">分类名称</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" value="<?php echo isset($listdata['name'])?$listdata['name']:''?>" name="name" id="inputEmail3" placeholder="分类名称">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">分类链接</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" value="<?php echo isset($listdata['link'])?$listdata['link']:''?>" name="link" id="inputEmail3" placeholder="分类链接">
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-default btn-lg active">提交</button>
                </div>
            </form>
        </div>
    </div>
    <form class="form-horizontal" action="?act=alldo" method="post">
        <table class="table col-md-6 table-bordered table-hover table-striped">
            <tr class="bg-primary">
                <thead>
                <th>序号</th>
                <th>分类名称</th>
                <th>时间</th>
                <th>操作</th>
                </thead>
            </tr>
            <?php
            if(isset($list)){foreach($list as $v){ ?>
                <tr>
                    <td><input type="checkbox" name="ids[]" value="<?php echo $v['id']?>"> <?php echo $v['id']?></td>
                    <td><?php echo $v['name']?></td>
                    <td><?php echo $v['dateline'];?></td>
                    <td><a href="cat.php?id=<?php echo $v['id']?>">编辑</a> | <a href="?act=del&id=<?php echo $v['id']?>" onClick="javascript:if(!confirm('确定删除吗？')){return false;}">删除</a></td>
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