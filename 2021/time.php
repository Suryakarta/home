<?php
require "koneksi.php";
while($data = mysqli_fetch_array(mysqli_query($connect,"SELECT tanggal FROM berita "))) {
	$waktu = $data[0];
	$return_arr[] = array($waktu);
}
echo json_encode($return_arr);