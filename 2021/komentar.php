<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$id = $posts->id;
$ew = mysqli_query($connect,"SELECT isi,jam,tanggal FROM berita WHERE berita= '1' AND kolom = '$id'");
while($data = mysqli_fetch_array($ew)) {
	$isi_komentar = $data[isi];
	$pengirim_komentar = $data[jam];
	$waktu = $data[tanggal];
	$nama = mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id = '$pengirim_komentar' ");
	while($nama_pengirim=mysqli_fetch_array($nama)){
		$return_arr[] = array(
			jam => $waktu,
			nama => $nama_pengirim[nama],
			id => $pengirim_komentar,
			isi => $isi_komentar,
		);
	}
}
echo json_encode($return_arr);