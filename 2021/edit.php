<?php
require 'koneksi.php';
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$name = $posts->name;
$set =mysqli_query($connect,"UPDATE tblmahasiswa SET nama = '$name' WHERE id = '$uid'  ") or die(mysqli_error());
if($set){
  echo 1;
}
