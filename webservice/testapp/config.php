<?php
session_start();
$dbname = "expenserecord";
$host = "localhost";
$username = "root";
$password = "";
$conn = mysql_connect($host,$username,$password);
mysql_select_db($dbname,$conn);
?>