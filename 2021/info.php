<?php
require "../koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$page = $posts->id;
    $return_arr[info] = mysqli_fetch_array(mysqli_query($connect,"SELECT * FROM info"));
    echo json_encode($return_arr);
