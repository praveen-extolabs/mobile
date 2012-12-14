<?php

header('Content-type: application/json');

$getCityList = array('method'=>'getCityList');

$getSubLocations = array('method'=>'getSubLocations','cityCode'=>"M6");


$getPropList = array('method'=>'getPropList','makaanData'=>"searched=1&main=1&popactive=&property_for=2&property_type=3&city=M6&loc1=0&budget_from=&budget_to=&bedroom=1&min_area=&area_unit=Sq.Ft&price_persqft=&fur%5B%5D=&fur%5B%5D=Furnished&fur%5B%5D=Semi-furnished&fur%5B%5D=Unfurnished&pb%5B%5D=&pb%5B%5D=2&pb%5B%5D=1&pb%5B%5D=3&x=36&y=10");

$getPropDetails = array('method'=>'getPropDetails','id'=>"aHR0cDovL3d3dy5tYWthYW4uY29tL3NlY3VuZGVyYWJhZC1wcm9wZXJ0eS95YXByYWwtcHJvcGVydHkvM2Joay1hcGFydG1lbnQtZm9yLXJlbnQtaW4teWFwcmFsLTIzOTUxNzgtMC0wL2Q0YmU4ZDlkN2ZhMGVmOGI2N2IzYWUzOTI3NDhjYmQ4LnBocA==");

$data = $getPropDetails;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/makaan/data.php");
//curl_setopt($ch, CURLOPT_URL, "http://www.skyvue.com.au");
//curl_setopt($ch, CURLOPT_HEADER, TRUE);
//curl_setopt($ch, CURLOPT_NOBODY, TRUE); // remove body
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_POST, 1); 
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
$result = curl_exec($ch);
//$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch); 
//file_put_contents('search.html',$result);
echo $result;