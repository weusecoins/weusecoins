<?
if(!isset($_SERVER['HTTP_ACCEPT_LANGUAGE']))$_SERVER['HTTP_ACCEPT_LANGUAGE']='';
$lang=reset(explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']));
if(strpos($lang,'-')!==false)$lang=substr($lang,0,strpos($lang,'-'));
if(!preg_match('/^[a-z_]{2,10}$/',$lang)||!is_dir($lang))$lang='en';
Header('Location: /'.$lang,true,302);
exit;
?>
