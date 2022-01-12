<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$data = $posts->data;
if(!$data){
}else{
    switch ($data) {
        case 'yayasan':
            $uid = mysqli_query($connect,"SELECT uid,name,picture,job FROM organisasi");
            while($row = mysqli_fetch_array($uid)){
                $return_arr[] = array(
                    id => $row[0],
                    name => $row[1],
                    pic => $row[2],
                    data => $row[3],
                );
            }
            break;
        case 'aplikasi':
            $uid = mysqli_query($connect,"SELECT * FROM admin");
            while($row = mysqli_fetch_array($uid)){
                $info = mysqli_query($connect,"SELECT name,pic,email FROM user WHERE uid = '$row[0]'");
                while($rows = mysqli_fetch_array($info)){
                    $return_arr[] = array(
                        id => $row[0],
                        name => $rows[0],
                        pic => $rows[1],
                        data => $rows[2],
                    );
                }
            }
            break;
    }
    echo json_encode($return_arr);
}
