<?php
require "koneksi.php";
require "sendnotif.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$user = $posts->user;
$video = $posts->video;
$times = time();
$token = mysqli_fetch_array(mysqli_query($connect,"SELECT token FROM token WHERE uid = '$uid' "))[0];
$name = mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id = '$uid' "))[0];
$name2 = mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id = '$user' "))[0];
$data = mysqli_num_rows(mysqli_query($connect,"SELECT id FROM points WHERE video = '$video' AND user = '$uid' "));
if(!$data){
	if(mysqli_query($connect,"INSERT INTO points VALUES(null,'$video','$user','$uid','$times')")){
		$return_arr = array(
			mysqli_num_rows(mysqli_query($connect,"SELECT id FROM points WHERE video = '$video'")),
			false
		);
		sendNotification($token,$video,$name,0,($name == $name2)? 'anda' : $name2);
	}
}else {
	if(mysqli_query($connect,"DELETE FROM points WHERE video='$video' and user='$uid' ")){
		$return_arr = array(
			mysqli_num_rows(mysqli_query($connect,"SELECT id FROM points WHERE video = '$video'")),
			true
		);
	}
}
echo json_encode($return_arr);
