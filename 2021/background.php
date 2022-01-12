<?php
require "../koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$page = intval($posts->id);
if(!$page){
}else{
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
    echo json_encode($return_arr);
}
