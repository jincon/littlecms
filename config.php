<?php
date_default_timezone_set("PRC");
include("include/db.php");
include("include/function.php");

$host = '127.0.0.1';
$dbname = '3d';
$username = 'root';
$password = 'root';
$charset='utf8';
$db = db::getInstance(array('dsn'=>"mysql:dbname=$dbname;host=$host","username"=>$username,'password'=>$password,'charset'=>$charset));


/**
 * 获取当前站点的访问路径根目录
 * @return [type] [description]
 */
function getSiteUrl() {
    $uri=$_SERVER['REQUEST_URI']?$_SERVER['REQUEST_URI']:($_SERVER['PHP_SELF']?$_SERVER['PHP_SELF']:$_SERVER['SCRIPT_NAME']);
    return 'http://'.$_SERVER['HTTP_HOST'].substr($uri, 0, strrpos($uri, '/')+1);
}
$host = str_replace("admin/","",getSiteUrl());




