<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$no = 10;
$connect = mysqli_connect('localhost','u8361745_vmus','trahpandu','u8361745_chat');
$page = !($posts->page * $no)? $no : $posts->page * $no;
$limit = $posts->page.','.$page;
$blog = mysqli_query($connect,"SELECT kolom,picture,title FROM blog ORDER BY times DESC LIMIT $limit");
while($data = mysqli_fetch_array($blog)){
    $return_arr[data][] = array(
    	kolom => $data[0],
    	picture => $data[1],
    	text => $data[2],
    );
}
$return_arr[total] = mysqli_num_rows(mysqli_query($connect,"SELECT id FROM blog"));
echo json_encode($return_arr);
