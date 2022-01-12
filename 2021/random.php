<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
if ($handle = opendir('document/')) {
    while (false !== ($entry = readdir($handle))) {
        $files[] = $entry;
    }
    $images = preg_grep('/\.jpg$/i', $files);
    foreach($images as $image){
        $return[] = array(
            data => $image,
            mime => 'jpg'
        );
    }
    $videos = preg_grep('/\.mp4$/i', $files);
    foreach($videos as $video){
        $return[] = array(
            data => $video,
            mime => 'jpg'
        );
    }
    $imgs = array_rand($return,2);
    for($i = 0; $i < 1 ;$i++){
    	$return_arr = $return[$imgs[$i]];
    }
    closedir($handle);
}
echo json_encode($return_arr);