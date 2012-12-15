<?php
error_reporting(0);

$method=$_POST['method']; 

header('Content-type:application/json');


//print_r($_POST);

 $input_code = md5( json_encode($_POST) );
 
 //echo $cache_file = "cache2/".$input_code.".txt";

if( file_exists($cache_file) ) { $html= file_get_contents($cache_file); if(empty($html) || $html=='null' ) {echo json_encode(array('error'=>true,'message'=>'Norecord'));} exit; }


if($method=='getCityList') {
 echo file_get_contents("city.json");
 exit;
}

if($method=='getSubLocations') {
 $loc_raw = file_get_contents("http://www.makaan.com/ssi/ajax/search-locations.php?multiple=1&type=new&fieldname=loc&cityid=".$_POST['cityCode']);
 
require_once "simple_html_dom.php";

$html = str_get_html( $loc_raw );

$sub_locs = array();

 foreach($html->find('select',0)->find('option') as $option) {
	
	$sub_locs[$option->value] = $option->plaintext;
 }
 
 unset($sub_locs[0]);
 
 $sub_locs = array_slice($sub_locs,0,10);
 
 if(empty($sub_locs)){
	echo json_encode(array('error'=>true,'message'=>'Failed to fetch'));
	exit;
 }
 
 $output = json_encode($sub_locs);
 
 file_put_contents($cache_file,$output);
 
 echo $output;	
 exit;
}


if($method=='getPropList') {
 $data = $_POST['makaanData'];
 
 //echo $data; exit;
 
 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, "http://www.makaan.com/search/search-property.php");
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
 curl_setopt($ch,CURLOPT_USERAGENT,"Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0"); 
 curl_setopt($ch, CURLOPT_POST, 1); 
 curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
 $result = curl_exec($ch);	
 curl_close($ch); 
 file_put_contents('search.html',$result);
 //echo $result; exit;
 $raw = file_get_contents('search.html');
 
 if(empty($raw)){
	echo json_encode(array('error'=>true,'message'=>'Failed to fetch'));
	exit;
 }
 //echo $raw; exit;
 
 $parsed = "<form name=\"frm_search\"".get_string_between($raw, "<form name=\"frm_search\"", "</form>")."</form>";
 
 //echo $parsed; exit;
 
 require_once "simple_html_dom.php";
 $html = str_get_html( $parsed );
 //print_r($html); exit;
 foreach($html->find('div.bbcontenth') as $prop) {
 
    //echo $prop->outertext; exit;
 
	$teaser =  $prop->find('div.desc',0); 
	
	$teaser->find('a',0)->outertext = "";
	$item['teaser'] = $teaser->plaintext;
	
	if(empty($item['teaser']) || $item['teaser']==null) $item['teaser']="";
	
	$item['thumb'] = $prop->find('img[width=80]',0)->src;
	
	if(empty($item['thumb'])) $item['thumb']="pics/no_image.jpg";
 
    $item['title']   = $prop->find('a.hreftemplate2', 0)->plaintext;
    $item['id']    = base64_encode($prop->find('a.hreftemplate2', 0)->href);
    $item['location'] = $prop->find('div.localityin', 0)->plaintext;
    $item['price'] = $prop->find('div.price', 0)->plaintext;
   
    $item['bedroom'] = $prop->find('span#bedroom', 0)->plaintext;
    $item['area'] = $prop->find('span#area', 0)->plaintext;
    $item['priceft'] = $prop->find('span#priceft', 0)->plaintext;
    $item['amenites'] = $prop->find('div.amenites', 0)->outertext;
    //$item['teaser'] = $prop->find('div.desc', 0)->text;
    $item['contactname'] = $prop->find('div.contactname', 0)->plaintext;
    //$item['thumb'] = $prop->find('div.propimages img', 0)->src;
	
	
	$item = array_map(utf8_encode, $item);
	//var_dump($item);
	
    $props[] = $item;
 }
 
  $output = json_encode($props);
  
  
 
 file_put_contents($cache_file,$output);
 
 if($output=='null') echo json_encode(array('error'=>true,'message'=>'Norecord'));
 else 
 echo $output;	
 
 exit;
}

if($method=='getPropDetails') {
 $details_raw = file_get_contents(base64_decode($_POST['id']));
 
 if(empty($details_raw)){
	echo json_encode(array('error'=>true,'message'=>'Failed to fetch'));
	exit;
 }
 //echo $details_raw; exit;
 require_once "simple_html_dom.php";


 $details['map'] = "http://www.makaan.com".get_string_between($details_raw, "<IFRAME frameborder=\\\"no\\\" scrolling=\\\"no\\\" hspace=\\\"0\\\" vspace=\\\"0\\\" style=\\\"width: 100%; height:225px;width:575px; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px;\\\" SRC=\\\"", "\\\"></IFRAME>");
 
 $details['longitude'] = get_string_between($details['map'],"longitude=","&");
 $details['latitude'] = get_string_between($details['map'],"latitude=","&");

 $html = str_get_html( $details_raw );

 $i=0;
	foreach($html->find('table.whitefill') as $datum) {
	 if($i==1) {
		
		$details['desc'] = $datum->children(1)->plaintext; 
		
		$content =  $datum->find('table[width=97%]',0);
		$content->find('ul',0)->outertext = ""; //find('tr:last')->
		$details['main'] = $content->outertext;
		
	 }
	 if($i==2) {
		//echo $datum->find('iframe',0)->outertext;
		$details['more'] = $datum->find('table[width=95%]',0)->outertext;
	 }
	 $i++;
	}

	$details['phone'] = '21'.rand(1111,9999).rand(1111,9999);
	$details['images'] = array('pics/'.rand(1,5).'.jpg','pics/'.rand(6,10).'.jpg','pics/'.rand(11,15).'.jpg' );
	


$output = json_encode($details);
 
 file_put_contents($cache_file,$output);
 
 echo $output;	

 exit;
}

echo json_encode(array('error'=>true,'message'=>'Unknown method'));

function get_string_between($string, $start, $end){
	$string = " ".$string;
	$ini = strpos($string,$start);
	if ($ini == 0) return "";
	$ini += strlen($start);   
	$len = strpos($string,$end,$ini) - $ini;
	return substr($string,$ini,$len);
}