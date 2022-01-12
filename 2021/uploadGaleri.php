<?php
require 'koneksi.php';
$uid = pathinfo($_FILES["file"]["name"])['filename'];
$times = time();
$new_image_name = $times.'__'.$_FILES["file"]["name"];
$mime = $_FILES["file"]["type"];
if(move_uploaded_file($_FILES["file"]["tmp_name"], "galeri/".$new_image_name)){
	echo 1;
};