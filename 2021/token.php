<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$token = $posts->token;
$result = mysqli_query($connect,"SELECT no FROM token WHERE uid = '$uid' ");
if(!mysqli_num_rows($result)) { 
  $query = mysqli_query($connect,"INSERT INTO token VALUES( NULL, '$uid', '$token')");
  if ($query) {
    echo true;
  }
}else{
  $query = mysqli_query($connect,"UPDATE token SET token='$token' WHERE uid='$uid' ");
  if ($query) {
    echo true;
  }
}