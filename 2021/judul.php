<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$id = $posts->id;
$judul = $posts->judul;
if(mysqli_query($connect,"UPDATE berita SET isi='$judul' where kolom='$id' AND berita='0' AND jam = '$uid' ") or die(mysqli_error())) {
	echo $id;
};
