<?php
 $db_host = "placeholder";
 $db_name = "placeholder";
 $db_user = "placeholder";
 $db_pass = "placeholder";
 
 try{
  
  $db_con = new PDO("mysql:host={$db_host};dbname={$db_name}",$db_user,$db_pass);
  $db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
$db_con->exec("set names utf8"); 
 }
 catch(PDOException $e){
  echo $e->getMessage();
 }
?>