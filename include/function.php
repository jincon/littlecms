<?php
//判断是否命令行
function is_cli(){
    return preg_match("/cli/i", php_sapi_name()) ? 1 : 0;
}

function _t($title){
	if(!is_cli()){return $title;}
	echo iconv("utf-8","gbk",$title);
}

function url($id,$act='show'){
	return $act.'-'.$id.'.html';
}

/*总页数，当前页，url地址*/
function page($countPages,$currPage,$href=''){
    if(empty($href)){
        $href=htmlentities($_SERVER['PHP_SELF']);
    }
    if($currPage <=3){
        $begin =1;
        $end = $countPages>=6?6:$countPages;
    }else{
        $end = $currPage +3>$countPages?$countPages:$currPage +3;
        $begin =$end -5<=1?1:$end -5;
    }
    //实现上一页
    $prev = $currPage -1<=1?1:$currPage -1;
    $pageNumString = '';
    $_GET['page'] = $prev;
    $pageNumString .="<a  class=\"last\" href='".$href.'?'.http_build_query($_GET)."'>上一页</a>";

    //根据起始页与终止页将当前页面的页码显示出来
    for($i=$begin;$i<=$end;$i++){
        $_GET['page'] = $i;
        //使用if实现高亮显示当前点击的页码
        if($currPage == $i){
            $pageNumString .= "<a class='select' href='".$href.'?'.http_build_query($_GET)."'>$i</a>";
        }else{
            $pageNumString .= "<a href='".$href.'?'.http_build_query($_GET)."'>$i</a>";
        }
    }
    //实现下一页
    $next = $currPage +1 >=$countPages?$countPages:$currPage +1;
    $_GET['page'] = $next;
    $pageNumString .="<a  class=\"next\" href='".$href.'?'.http_build_query($_GET)."'>下一页</a>";

    return $pageNumString;
}

/*
 * curl 获取数据
 *
 * */
function curlget($url){
    $curl = curl_init(); // 启动一个CURL会话
    curl_setopt($curl, CURLOPT_URL, $url);
    $ip = rand(100,225).'.'.rand(100,225).'.'.rand(100,225).'.'.rand(1,225);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array('X-FORWARDED-FOR:'.$ip, 'CLIENT-IP:'.$ip));
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    if(strpos($url,'https')!==false){
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    }
    if(curl_error($curl)){
        echo $error = curl_error($curl);
    }
    curl_setopt($curl, CURLOPT_USERAGENT,'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36');
    $content = curl_exec($curl);
    //关闭URL请求
    curl_close($curl);
    return $content;    //返回json对象
}


function random_str_get($data,$num=2,$sp=','){
    $data = explode(',',$data);
    shuffle($data);
    if($num==1){
        return $data[0];
    }
    $keys = array_rand($data, $num);
    for($i = 0; $i < $num; $i++)
    {
        $password[] = $data[$keys[$i]];
    }
    sort($password);
    return implode($sp,$password);
}


/*
 * $total 获取总条数
 * $num
 * */
function getrandom($total,$num=3,$exp='、'){
    $_str = array();
    for($i=0;$i<$total;$i++){
        $_str []= random_int($num);
    }
    return implode($exp,$_str);
}


//字符串求和
function strsum($str){
    $str = explode(",",$str);
    return array_sum($str);
}
function CheckSubstrs($substrs,$text){
    foreach($substrs as $substr)
        if(false!==strpos($text,$substr)){
            return true;
        }
    return false;
}
//判断手机号
function isMobile(){
    $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
    $useragent_commentsblock=preg_match('|\(.*?\)|',$useragent,$matches)>0?$matches[0]:'';

    $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
    $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');

    $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) ||
        CheckSubstrs($mobile_token_list,$useragent);

    if ($found_mobile){
        return true;
    }else{
        return false;
    }
}

/**
* 递归实现无限极分类
* @param $array 分类数据
* @param $pid 父ID
* @param $level 分类级别
* @return $list 分好类的数组 直接遍历即可 $level可以用来遍历缩进
*/
function getTree($array, $pid =0, $level = 0){
    static $list = [];
    foreach ($array as $key => $value){
        if ($value['pid'] == $pid){
            $value['level'] = $level;
            $value['flag'] = $level>0?($level==1 ? "|--" : ("|--".str_repeat('--', $value['level']-1))) : '';
            $list[] = $value;
            unset($array[$key]);
            getTree($array, $value['id'], $level+1);
        }
    }
    return $list;
}