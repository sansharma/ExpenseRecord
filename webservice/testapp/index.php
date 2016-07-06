<?php
header("Access-Control-Allow-Origin: *");
include("config.php");
if($_POST){
	$username = $_POST['username'];
	$password = $_POST['password'];
	$result = mysql_query("Select * from user where username='$username' AND password='$password'");
	if(mysql_num_rows($result)){
		while($row = mysql_fetch_array($result)){
			$i=0;
			$data = array();
			$data[$i]['id'] = $row['id'];
            $data[$i]['username'] = $row['username'];
            $data[$i]['password'] = $row['password'];
			$i++;
		}
			
			echo json_encode($data);
	}
	else{
		echo "error";
	}
}
?>