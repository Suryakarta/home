<?php
require 'koneksi.php';
$new_image_name = urldecode($_FILES["file"]["name"]).".jpg";
move_uploaded_file($_FILES["file"]["tmp_name"], "../image/".$new_image_name);

?>