<?
$filename = dirname(__FILE__) . '/headlines.html';
if(is_file($filename)&&filemtime($filename)>time()-86400){exit;}
$data=file_get_contents('http://bitcoinwatch.com/headlines.html');
if($data===false||strpos($data,'<h3>')===false)exit;
$data=substr($data,strpos($data,'<h3>'));
if(strpos($data,'</ul>')===false)exit;
$data=explode('</ul>',$data);
if(count($data)<6)exit;
$ndata=implode('</ul>',array($data[0],$data[1],$data[2],$data[3],$data[4],$data[5])).'</ul><a class="more" href="http://bitcoinwatch.com/headlines.html">more..</a>';
$ndata=str_replace('<h3>','<p>',str_replace('</h3>','</p>',$ndata));
file_put_contents($filename,$ndata);
?>