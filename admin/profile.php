<?php
header("Content-type:text/html;charset=utf-8");


include("../include/function.php");
include_once("../config.php");
include_once 'include/include.php';


if(isset($_GET['act']) && $_GET['act']== 'logout'){
    $_SESSION['is_qx_worker'] = '';
    $_SESSION['uid'] = '';
    $_SESSION['username'] = '';
    unset($_SESSION);
    session_destroy();
    header("location:login.php"); exit;
}

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

    <div class="panel panel-default">
        <div class="panel-heading">修改账户密码</div>
        <div class="panel-body">
            <form class="form-horizontal" action="?act=save" method="post">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">新密码</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" value="" name="password" id="inputEmail3" placeholder="请输入新密码">
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-default btn-lg active">提交</button>
                </div>
            </form>
        </div>
    </div>

</div>
</body>
</html>