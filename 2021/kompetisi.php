<?php
require "koneksi.php";
$ew = mysqli_query($connect,"SELECT kolom,jam,isi FROM berita WHERE berita= '0' AND kategori LIKE '1' ORDER BY rand()");
if(!mysqli_num_rows($ew)){

}else{
	while($data = mysqli_fetch_array($ew)) {
		$id_video = $data[0];
		$id_pengirim = $data[1];
		$return_arr[] = array(
			id => $id_video,
			like => mysqli_num_rows(mysqli_query($connect,"SELECT * FROM points WHERE video ='$id_video' AND band = '$id_pengirim' ")),
			user => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$id_pengirim' "))[0],
			title =>  $data[2],
		);
	}
	echo json_encode($return_arr);
}
