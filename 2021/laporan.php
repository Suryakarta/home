<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$id = $posts->id;
$uid = $posts->uid;
$time = time();
$query = mysqli_query($connect,"INSERT INTO laporan VALUES( null, '$id', '$uid', '$time')") or die(mysqli_error());
if ($query) {
  echo 1;
}
?>