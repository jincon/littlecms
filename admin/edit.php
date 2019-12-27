<?php
header("Content-type:text/html;charset=utf-8");

include("../include/function.php");
include_once("../config.php");
include_once 'include/include.php';

//修改参数部分

$rowsPerPage = 20;  //每页显示数
//end

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
$sql = '';
if(isset($_GET['key']) && $_GET['key']){
    $sql = ' where title like "%'.$_GET['key'].'%"';
}

$list = $db->getAll("select * from content ".$sql." order by id desc limit $offset,$rowsPerPage");
$cat = $db->getAll("select * from cat");
$cat = getTree($cat);
$arr = $db->getOne('select count(*) total from content '.$sql);
$totalRows=$arr['total'];
$totalpage =ceil($totalRows/$rowsPerPage);
//end


//编辑、插入保存
if(isset($_GET['act']) && $_GET['act']== 'save'){
    $id = isset($_POST['id']) && $_POST['id']? intval($_POST['id']):'';

    $content = isset($_POST['content']) && $_POST['content']?$_POST['content']:'';
    $title = isset($_POST['title']) && $_POST['title']?$_POST['title']:'';
    $cid = isset($_POST['cid']) && $_POST['cid']?intval($_POST['cid']):'';
    if(!$title){
        echo "<script>alert('名称请填写完整')</script>";exit;
    }
    $pcid = 0;
    if(!$cid){
        echo "<script>alert('请选择分类哦')</script>";exit;
    }else{
        $_cat = $db->getOne("select * from cat where id=".$cid);
        $pcid = $_cat['pid'];
    }

    if($id){
        $sql = "UPDATE content set content = '".$content."',title='".$title."',cid='".$cid."',pcid='".$pcid."' where id=".$id;
    }else{
        $sql = "insert into content set content= '".$content."',title='".$title."',cid='".$cid."',pcid='".$pcid."'";
    }
    $db->query($sql);
    echo "<script>alert('操作成功');location.href='index.php'</script>";exit;
    exit;
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
    <link href="./ueditor/themes/default/css/umeditor.min.css" type="text/css" rel="stylesheet">
    <script src="./ueditor/umeditor.config.js"></script>
    <script src="./ueditor/umeditor.min.js"></script>
</head>
<body>
<script language="javascript" type="text/javascript" src="./js/WdatePicker.js"></script>

<div class="container col-md-8 col-md-offset-2">

    <?php include ("nav.php");?>

    <div class="panel panel-default">
        <div class="panel-heading">添加/修改内容</div>
        <div class="panel-body">
            <form class="form-horizontal" action="?act=save" method="post">
                <input type="hidden" name="id" value="<?php echo isset($_GET['id'])?$_GET['id']:'';?>">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">标题</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" value="<?php echo isset($listdata['title'])?$listdata['title']:''?>" name="title" id="inputEmail3" placeholder="标题">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">分类</label>
                    <div class="col-sm-3">
                        <select class="form-control" name="cid">
                        <option value="0" <?php if(isset($listdata['cid']) && $listdata['cid'] == 0){echo "selected";}?>>未分类</option>
                        <?php foreach($cat as $k=>$v){ ?>
                        <option value="<?php echo $v['id']?>" <?php if(isset($listdata['cid']) && $listdata['cid'] == $v['id']){echo "selected";}?>><?php echo $v['flag'].$v['name']?></option>
                        <?php } ?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">内容</label>
                    <div class="col-sm-8">
                        <script type="text/plain" id="container" name="content" style="width:100%;height:450px;"><?php echo isset($listdata['content']) && $listdata['content']?$listdata['content']:'';?></script>
                    </div>

                </div>
                <!-- 实例化编辑器 -->
                <script type="text/javascript">
                    var ue = UM.getEditor('container',{
                        toolbars: [
                            ['fullscreen', 'source', 'undo', 'redo', 'bold']
                        ]
                    });
                </script>
                <div class="text-center">
                    <button type="submit" class="btn btn-default btn-lg active">提交</button>
                </div>
            </form>
        </div>
    </div>


</div>
</body>
</html>