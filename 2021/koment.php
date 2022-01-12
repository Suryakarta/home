<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$texts = $posts->text;
$pic = $posts->pic;
$times = time();
if(!$uid){
}else{
	if(mysqli_query($connect,"INSERT INTO chat VALUES(null, '$uid','$texts','$times','$pic')") or die(mysqli_error())){
		$return_arr[] = array(
			id => mysqli_insert_id($connect),
			uid => $uid,
			name => mysqli_fetch_array(mysqli_query($connect,"SELECT name FROM user WHERE uid = '$uid' "))[0],
			text =>  $texts,
			times => date('H:i d/m/y',$times),
			dates => $times
		);
		echo json_encode($return_arr);
	}	
}
