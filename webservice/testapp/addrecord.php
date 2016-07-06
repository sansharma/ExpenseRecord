<?php
header("Access-Control-Allow-Origin: *");
include("config.php");
if($_POST){
	$id = $_POST['id'];
	$subject = $_POST['subject'];
	$amount = $_POST['amount'];
	$sql = "insert into expense(subject,amount,user_id) values('$subject','$amount','$id')";
	if( mysql_query($sql)){
		echo "ok";		
	}
	else{
		echo "error";
	}
}
?>