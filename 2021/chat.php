<?php
require "../koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$page = $posts->page;
$list = 1000;
$listend = $page * $list;
$limit = $listend.','.$list;
$ew = mysqli_query($connect,"SELECT * FROM chat ORDER BY id");
while($data = mysqli_fetch_array($ew)) {
	$return_arr[] = array(
		id => $data[0],
		uid => $data[1],
		name => mysqli_fetch_array(mysqli_query($connect,"SELECT name FROM user WHERE uid = '$data[1]' "))[0],
		text =>  $data[2],
		times => date('H:i d/m/y',$data[3]),
	);
}
echo json_encode($return_arr);