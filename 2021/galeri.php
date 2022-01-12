<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$page = $posts->page;
$no = 45 + $page;
if ($handle = opendir('document/')) {
    while (false !== ($entry = readdir($handle))) {
        $files[] = $entry;
    }
    $images = preg_grep('/\.jpg$/i', $files);
    foreach($images as $image){
        $return[] = $image;
    }
    $videos = preg_grep('/\.mp4$/i', $files);
    foreach($videos as $video){
        $return[] = $video;
    }
    rsort($return);
    for($i = $page; $i < $no ;$i++){
    	$return_arr[data][] = $return[$i];
    }
    $return_arr[total] = count($return);
    closedir($handle);
}
echo json_encode($return_arr);