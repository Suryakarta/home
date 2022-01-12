<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$email = $posts->email;
$name = $posts->name;
$pic = $posts->pic;
$phone = $posts->phone;
$uid = $posts->uid;
$verified = $posts->verified;
if(!mysqli_num_rows(mysqli_query($connect,"SELECT no FROM user WHERE email = '$email' "))) { 
  $query = mysqli_query($connect,"INSERT INTO user VALUES( NULL, '$uid', '$name', '$email', '$phone','$pic')") or die(mysqli_error());
  if ($query) {
      $id = $uid;
      $nama = $name;
      $nohp = $phone;
      $foto = $pic;
  }
}else{
    $id = mysqli_fetch_array(mysqli_query($connect,"SELECT uid FROM user WHERE email = '$email' "))[0];
    $nama = mysqli_fetch_array(mysqli_query($connect,"SELECT name FROM user WHERE email = '$email' "))[0];
    $nohp = mysqli_fetch_array(mysqli_query($connect,"SELECT phone FROM user WHERE email = '$email' "))[0];
    $foto = mysqli_fetch_array(mysqli_query($connect,"SELECT pic FROM user WHERE email = '$email' "))[0];
}
$data = array(
  uid => $id,
  name => $nama,
  email => $email,
  phone => $nohp,
  pic => $foto,
  verified => time()
);
echo json_encode($data);
