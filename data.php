<?php


$method=$_POST['method']; 

header('Content-type:application/json');


//print_r($_POST);

 $input_code = md5( json_encode($_POST) );
 
 $cache_file = "cache/".$input_code.".txt";

if( file_exists($cache_file) ) { echo file_get_contents($cache_file); exit; }


if($method=='getCityList') {
 echo file_get_contents("city.json");
 exit;
}

if($method=='getSubLocations') {
 $loc_raw = file_get_contents("http://www.makaan.com/ssi/ajax/search-locations.php?multiple=1&type=new&fieldname=loc&cityid=".$_POST['cityCode']);
 
require_once "simple_html_dom.php";

$html = str_get_html( $loc_raw );

 foreach($html->find('select',0)->find('option') as $option) {
	
	$sub_locs[$option->value] = $option->plaintext;
 }
 
 unset($sub_locs[0]);
 
 $output = json_encode($sub_locs);
 
 file_put_contents($cache_file,$output);
 
 echo $output;	
 exit;
}


if($method=='getPropList') {
 $data = $_POST['makaanData'];
 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, "http://www.makaan.com/search/search-property.php");
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
 curl_setopt($ch,CURLOPT_USERAGENT,"Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0"); 
 curl_setopt($ch, CURLOPT_POST, 1); 
 curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
 $result = curl_exec($ch);	
 curl_close($ch); 
 //file_put_contents('search.html',$result);
 
 $raw = file_get_contents('search.html');
 
 $parsed = "<form name=\"frm_search\"".get_string_between($raw, "<form name=\"frm_search\"", "</form>")."</form>";
 
 require_once "simple_html_dom.php";
 $html = str_get_html( $parsed );
 
 foreach($html->find('div.bbcontenth') as $prop) {
 
	$teaser =  $prop->find('div.desc',0); 
	
	$teaser->find('a',0)->outertext = "";
	$item['teaser'] = $teaser->outertext;
	
	
	$item['thumb'] = $prop->find('img',0)->src;
 
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
	

	
	
	
	
	
    $props[] = $item;
 }
 
  $output = json_encode($props);
 
 file_put_contents($cache_file,$output);
 
 echo $output;	
 
 
 exit;
}

if($method=='getPropDetails') {
 $details_raw = file_get_contents(base64_decode($_POST['id']));
 //echo $details_raw; exit;
 require_once "simple_html_dom.php";


 $details['map'] = "http://www.makaan.com".get_string_between($details_raw, "<IFRAME frameborder=\\\"no\\\" scrolling=\\\"no\\\" hspace=\\\"0\\\" vspace=\\\"0\\\" style=\\\"width: 100%; height:225px;width:575px; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px;\\\" SRC=\\\"", "\\\"></IFRAME>");

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

	
	$details['images'] = array('/pics/'.rand(1,4).'.jpg','/pics/'.rand(5,8).'.jpg','/pics/'.rand(9,12).'.jpg' );
	


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