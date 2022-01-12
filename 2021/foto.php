<?php
require 'koneksi.php';
$new_image_name = urldecode($_FILES["file"]["name"]).".pic";
move_uploaded_file($_FILES["file"]["tmp_name"], "../profil/".$new_image_name);

?>