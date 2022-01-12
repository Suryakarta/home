<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
if(!$uid){
}else{
	if(mysqli_query($connect,"INSERT INTO admin VALUES('$uid')") or die(mysqli_error())){
        $info = mysqli_query($connect,"SELECT name,pic,email FROM user WHERE uid = '$uid'");
        while($rows = mysqli_fetch_array($info)){
            $return_arr[] = array(
                id => $uid,
                name => $rows[0],
                pic => $rows[1],
                email => $rows[2],
            );
        }
		echo json_encode($return_arr);
	}	
}