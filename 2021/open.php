<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$id = $posts->id;
$ew = mysqli_query($connect,"SELECT times,title,text,picture,uid FROM blog WHERE kolom = '$id'");
while($data = mysqli_fetch_array($ew)) {
	$return_arr[data] = array(
                id => $id,
                times => $data[0],
                title => $data[1],
                text => $data[2],
                picture => 'https://suryakartanusantara.smooth.asia/2021/post/'.$data[3],
                idUser => $data[4],
                dates => date('H:i d/m/y',$times),
                url => 'https://suryakartanusantara.smooth.asia/blog/'.date('Y',$data[0]).'/'.date('m',$data[0]).'/'.str_replace(' ', '-', $data[1]).'.html'
	);
}
$return_arr[like] = mysqli_num_rows(mysqli_query($connect,"SELECT * FROM suka"));
$return_arr[komen] = mysqli_num_rows(mysqli_query($connect,"SELECT * FROM komen"));
$return_arr[likethis] = mysqli_num_rows(mysqli_query($connect,"SELECT * FROM suka WHERE uid = '$uid' "));
$blog = mysqli_query($connect,"SELECT kolom,picture,text FROM blog ORDER BY RAND() DESC LIMIT 3");
while($data = mysqli_fetch_array($blog)){
        $return_arr[blog][] = array(
            kolom => $data[0],
            picture => $data[1],
            text => $data[2],
        );
    }
echo json_encode($return_arr);