<?php
require "../koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$a = $posts->uid;
if(!$a){
}else{
	$echo = count(mysqli_fetch_array(mysqli_query($connect,"SELECT * FROM admin WHERE uid = '$a'"))[0]);
	echo json_encode($echo);
}
