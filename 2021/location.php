<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$texts = $posts->text;
$data = json_encode($posts->pic);
$times = time();
if(!$uid){
}else{
	if(mysqli_query($connect,"INSERT INTO chat VALUES(null, '$uid','$texts','$times','$data')") or die(mysqli_error())){
		$name = mysqli_fetch_array(mysqli_query($connect,"SELECT name FROM user WHERE uid = '$uid' "))[0];
		$date = date('h:i d/m/y',$times);
		$return_arr[] = array(
			id => mysqli_insert_id($connect),
			uid => $uid,
			name => $name,
			text =>  $texts,
			times => $date,
			pic => json_decode($data)
		);
		echo json_encode($return_arr);
	}	
}
