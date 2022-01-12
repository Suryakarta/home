<?php
require 'koneksi.php';
$uid = $_POST['uid'];
$title = $_POST['title'];
$subtitle = $_POST['subtitle'];
$uid = pathinfo($_FILES["file"]["name"])['filename'];
$times = time();
$new_image_name = $times.'__'.$_FILES["file"]["name"];
$url = str_replace(' ', '-', $title);
if(move_uploaded_file($_FILES["file"]["tmp_name"], "post/".$new_image_name)){
	if(mysqli_query($connect,"INSERT INTO blog VALUES(null, '$times','$title','$subtitle','$new_image_name',$times,'$uid')") or die(mysqli_error())){
		$tahun = date('Y',time());
		$bulan = date('m',time());
		if (!is_dir('../blog/'.$tahun.'/'.$bulan)) {
    		if(mkdir('../blog/'.$tahun.'/'.$bulan, 0777, true)){
 				$open = fopen('../blog/'.$tahun.'/'.$bulan.'/'.$url.'.html',"w");
    		};
		}else{
 			$open = fopen('../blog/'.$tahun.'/'.$bulan.'/'.$url.'.html',"w");
		}
		$link1 = 'https://suryakartanusantara.smooth.asia';
		$link2 = 'https://suryakartanusantara.smooth.asia';
		$html = '<!DOCTYPE html>
			<html>
			<head>
			    <meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
			    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
			    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
				<meta http-equiv="Pragma" content="no-cache" />
			    <meta http-equiv="Expires" content="0"/>
			    <meta name="google-site-verification" content="1rzeOUXtKtp3G2he6XiSyrdb9r5e9RtyfPWfP2slx1Y" />
				<title>'.$title.'</title>
			    <meta itemprop="name" content="'.$title.'">
				<meta itemprop="description" content="'.$subtitle.'">
				<meta itemprop="image" content="'.$link1.'/2021/post/'.$new_image_name.'">
			    <meta property="og:url" content="'.$link1.'/blog/'.$tahun.'/'.$bulan.'/'.$title.'.html">
			    <meta property="og:type" content="website">
				<meta property="og:title" content="'.$title.'">
			    <meta property="og:description" content="'.$subtitle.'">
			    <meta property="og:image" content="'.$link1.'/2021/post/'.$new_image_name.'">
				<meta name="twitter:card" content="summary_large_image">
			    <meta name="twitter:title" content="'.$title.'">
			    <meta name="twitter:description" content="'.$subtitle.'">
				<meta name="twitter:image" content="'.$link1.'/2021/post/$new_image_name">
			    <link rel="stylesheet" href="'.$link2.'/assets/bootstrap/css/bootstrap.min.css">
			    <link rel="stylesheet" href="'.$link2.'/assets/dropdown/css/style.css">
				<link rel="stylesheet" href="'.$link2.'/assets/socicon/css/styles.css">
			    <link rel="stylesheet" href="'.$link2.'/assets/theme/css/style.css">
			    <link rel="stylesheet" href="'.$link2.'/assets/mobirise/css/mbr-additional.css" type="text/css">
			</head>
			<body>
			    <script src="'.$link2.'/index.js"></script>
			    <script src="'.$link2.'/assets/web/assets/jquery/jquery.min.js"></script>
				<script src="'.$link2.'/assets/bootstrap/js/bootstrap.min.js"></script>
			</body>
			</html>';
		fwrite($open, $html);
		fclose($open);
		$return_arr[] = array(
			uid => $uid,
			title =>  $title,
			subtitle => $subtitle,
			times => date('H:i d/m/y',$times),
			dates => $times
		);
		echo json_encode($return_arr);
	}
};