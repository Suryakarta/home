<?php
require 'koneksi.php';
$uid = pathinfo($_FILES["file"]["name"])['filename'];
$times = time();
$new_image_name = $times.'__'.$_FILES["file"]["name"];
$mime = $_FILES["file"]["type"];
$data = '{ "type" : "video" , "data" : "'.$new_image_name.'", "mimeType" : "'.$mime.'"}';
if(move_uploaded_file($_FILES["file"]["tmp_name"], "document/".$new_image_name)){
	if(mysqli_query($connect,"INSERT INTO chat VALUES(null, '$uid','$texts','$times','$data')") or die(mysqli_error())){
		$return_arr[] = array(
			id => mysqli_insert_id($connect),
			uid => $uid,
			name => mysqli_fetch_array(mysqli_query($connect,"SELECT name FROM user WHERE uid = '$uid' "))[0],
			text =>  'video',
			times => date('H:i d/m/y',$times),
			pic => json_decode($data),
			dates => $times
		);
		echo json_encode($return_arr);
	}
};