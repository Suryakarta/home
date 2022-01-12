<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$vid = $posts->id;
$whatsapp = $posts->whatsapp;
$times = time();
if(mysqli_query($connect,"INSERT INTO kompetisi VALUES( null, '$uid', '$vid', '$times','','$whatsapp','0')")){
	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL ); 
	$headers = "From: pendaftaran_kompetisi_vmi@smooth.asia\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message = '
    	<section style="width: 100%;height: auto;box-sizing: border-box;padding: 10%;margin:0;-ms-text-size-adjust: 100%;-webkit-tap-highlight-color: #447bff;" >
    		<div style="background-color: #bff;padding:5%;position: relative;float: left;width:100%;height: auto;border-top-right-radius: 5px;border-top-left-radius: 5px">
    			<h1><strong>kompetisi Virtual Music Industry</strong></h1>
    			<h3>Smooth home production</h3>
    			<p>Pendaftar baru berhasil menyimpan datanya, Kirim pesan Whatsapp kepada peserta untuk melakukan pembayaran, setelah peserta melakukan pembayaran admin diwajibkan untuk melakuakan verifikasi dengan menekan tombol dibawah ini. verifikasi sukses peserta akan menerima email dan videonya akan muncul dikolom kompetisi</p>
    			<p><strong>Nama : </strong>'.mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$uid' "))[0].'</p>
    			<p><strong>Telpon : </strong><a href="tel:+62'.$whatsapp.'">'.$whatsapp.'</a></p>
    			<p><strong>Whatsapp : </strong><a style="color: green" href="https://wa.me/+62'.$whatsapp.'">'.$whatsapp.'</a></p>
                <div style="width: 100px;background-color:red;padding: 5px;text-align: center;border-radius: 5px">
                    <a style="text-decoration:none;background-color:transparent;color:black" href="https://vmi.smooth.asia/2021/admin.php?vid='.$vid.'">verifikasi</a>
                </div>
    		</div>
    		<div class="w-100 by p" style="background-color: #bbb;padding:5%;position: relative;float: left;width:100%;height: auto;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px">
    			<p class="w-100" style="">desain by 
    				<a href="https://smooth.asia" style="">Sm<span style="">oo</span>th</a>
    			</p>
    		</div>
    	</section>';
    mail('rascallino69@gmail.com','pendaftaran kompetisi vmi',$message, $headers);
    //$from = "pendaftaran_mi_al_huda@smooth.asia";    
    //$to = 'rascallino69@gmail.com';
    //$subject = "Laporan PPDB MI AL Huda Karangwuni"; 
    //$message = 'Pendaftar baru berhasil menyimpan data';   
    //$headers = "From:" . $from;    
    //mail($to,$subject,$message, $headers);
	echo 1;
	//if(mysqli_query($connect,"UPDATE berita SET kategori='1' where kolom='$vid' AND berita='0' AND jam = '$uid' ") or die(mysqli_error())) {
	//	echo 1;
	//};
}
