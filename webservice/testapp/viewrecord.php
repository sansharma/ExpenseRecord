<?php
header("Access-Control-Allow-Origin: *");
include("config.php");
if($_POST){
	
	$id = $_POST['id'];
	$result = mysql_query("Select * from expense where user_id='$id' ");
	$i=0;
	if(mysql_num_rows($result)){
		while($row = mysql_fetch_array($result)){
			
			$data = array();
			$data[$i]['id'] = $row['id'];
            $data[$i]['subject'] = $row['subject'];
            $data[$i]['amount'] = $row['amount'];
			$i++;
		}
			
			echo json_encode($data);
	}
	else{
		echo "error";
	}
}
?>