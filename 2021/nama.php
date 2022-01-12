<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$return_arr = array(
	name => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$uid' "))[0],
);
echo json_encode($return_arr);