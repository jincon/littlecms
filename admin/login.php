<?php
header("Content-type:text/html;charset=utf-8");
include_once 'include/include.php';
include_once("../config.php");
//session_start();

if(isset($_SESSION['is_qx_worker']) && $_SESSION['is_qx_worker'] == 'yes'){
	header("Location:index.php");
	exit;
}

$referer = isset($_COOKIE['referer'])?$_COOKIE['referer']:'';

if (isset($_POST)) {
	$act = isset($_POST['act'])?getgpc_n($_POST['act']):'';
	if ($act == 'checkin') {
		$account = getgpc_n($_POST['account']);
		$password = md5(getgpc_n($_POST['password']));
		if($user = $db->getOne('select * from users where username=? and password = ? ',array($account,$password))){

			$_SESSION['is_qx_worker'] = 'yes';
			$_SESSION['uid'] = $user['uid'];
			$_SESSION['username'] = $user['username'];

			echo '<script>alert("登录成功"); location.href="index.php";</script>';exit;
		}else{
			echo '<script>alert("账户或者密码不对"); history.go(-1);</script>';exit;
		}
	}
}
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>后台登录</title>
	<script src="js/header.js"></script>
	<script src="js/jquery.min.js"></script>
	<link href="css/main.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div class="mainbox" style="background:none">
	<form id="search" action="login.php" method="post">
		<input name="act" type="hidden" value="checkin">
		<input name="referer" type="hidden" value="<?php echo $referer;?>">
		<ul class="listiinput">
			<li>
				<input name="account" type="text" class="ruchanginput" placeholder="用户名">
			</li>
			<li>
				<input name="password" type="password" class="ruchanginput" placeholder="输入密码">
			</li>

		</ul>
	</form>
	<div>
		<a href="javascript:void(0);" class="b-btn" onClick="document.getElementById('search').submit()" style="height:70px;line-height:70px;">登录</a>
	</div>
</div>

</body>
</html>
