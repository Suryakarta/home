<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$page = intval($posts->id);
if(!$page){
}else{
$connect = mysqli_connect('localhost','u8361745_vmus','trahpandu','u8361745_chat');
    if ($handle = opendir('document/')) {
        while (false !== ($entry = readdir($handle))) {
            $files[] = $entry;
        }
        $images = preg_grep('/\.jpg$/i', $files);
        foreach($images as $image){
            $img[] = $image;
        }
        $imgs = array_rand($img,5);
        for($i = 0; $i < count($imgs);$i++){
            $return[] = array(
                id => $i + 1,
                picture => 'https://suryakartanusantara.smooth.asia/2021/document/'.$img[$imgs[$i]],
                alt => 'yayasan marhaenis mukmin suryakarta nusantara'
            );
        }
        $return_arr[background] = $return;
        closedir($handle);
    }
    $blog = mysqli_query($connect,"SELECT kolom,picture,text,title FROM blog ORDER BY times DESC LIMIT 3");
    while($data = mysqli_fetch_array($blog)){
        $return_arr[blog][] = array(
            kolom => $data[0],
            picture => $data[1],
            text => $data[2],
            title => $data[3],
        );
    }
    $gerakan = mysqli_query($connect,"SELECT * FROM gerakan");
    while($data = mysqli_fetch_array($gerakan)){
        $return_arr[gerakan][] = $data;
    }
    $mitra = mysqli_query($connect,"SELECT * FROM mitra");
    while($data = mysqli_fetch_array($mitra)){
        $return_arr[mitra][] = $data;
    }
    $yt = mysqli_query($connect,"SELECT * FROM video");
    while($data = mysqli_fetch_array($yt)){
        $return_arr[yt][] = $data;
    }
    $return_arr[grup] = mysqli_num_rows(mysqli_query($connect,"SELECT * FROM chat WHERE times > '$page' ORDER BY id"));
    $return_arr[info] = mysqli_fetch_array(mysqli_query($connect,"SELECT * FROM info"));
    $return_arr[kontak] = mysqli_fetch_array(mysqli_query($connect,"SELECT * FROM kontak"));
    $login = mysqli_query($connect,"SELECT * FROM login");
    while($data = mysqli_fetch_array($login)){
        $return_arr[login][] = $data;
    }
    $logo = mysqli_query($connect,"SELECT * FROM logo");
    while($data = mysqli_fetch_array($logo)){
        $return_arr[logo][] = $data;
    }
    $visi = mysqli_query($connect,"SELECT * FROM visimisi WHERE no ='2'");
    while($data = mysqli_fetch_array($visi)){
        $return_arr[visimisi][visi] = $data;
    }
    $misi = mysqli_query($connect,"SELECT * FROM visimisi WHERE no ='3'");
    while($data = mysqli_fetch_array($misi)){
        $return_arr[visimisi][misi] = $data;
    }
}
    echo json_encode($return_arr);
