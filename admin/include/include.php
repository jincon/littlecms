<?php
session_start();

//$host = 'localhost';
//$dbname = '3d';
//$username = 'root';
//$password = '123456';
//$charset='utf8';
//include("db.php");
//$db = db::getInstance(array('dsn'=>"mysql:dbname=$dbname;host=$host","username"=>$username,'password'=>$password,'charset'=>$charset));


include("function.php");

if(!function_exists('getip')){
    function getip() {
        //strcasecmp 比较两个字符，不区分大小写。返回0，>0，<0。
        if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
            $ip = getenv('HTTP_CLIENT_IP');
        } elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
            $ip = getenv('HTTP_X_FORWARDED_FOR');
        } elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
            $ip = getenv('REMOTE_ADDR');
        } elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        $res =  preg_match ( '/[\d\.]{7,15}/', $ip, $matches ) ? $matches [0] : '';
        return $res;
        //dump(phpinfo());//所有PHP配置信息
    }
}

function my_sort($arrays,$sort_key,$sort_order=SORT_ASC,$sort_type=SORT_NUMERIC ){   
	if(is_array($arrays)){   
		foreach ($arrays as $array){   
			if(is_array($array)){   
				$key_arrays[] = $array[$sort_key];   
			}else{   
				return false;   
			}   
		}   
	}else{   
		return false;   
	}  
	array_multisort($key_arrays,$sort_order,$sort_type,$arrays);   
	return $arrays;   
}  
