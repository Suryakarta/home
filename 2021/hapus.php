<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$id = $posts->id;
$uid = $posts->uid;
require 'koneksi.php';
if(mysqli_query($connect,"DELETE FROM berita WHERE kolom='$id' AND berita= '0' AND jam='$uid'")){
	unlink('../image/'.$id.'.mp4');
	unlink('../image/'.$id.'.jpg');
	echo true;
};