<?php 
require "koneksi.php";
$tahun = date('Y',time());
$bulan = date('m',time());
if (!is_dir('../blog/'.$tahun.'/'.$bulan)) {
    if(mkdir('../blog/'.$tahun.'/'.$bulan, 0777, true)){
    	echo true;
 	$open = fopen('../blog/'.$tahun.'/'.$bulan.'/filename.html',"w");
    };
}else{
 	$open = fopen('../blog/'.$tahun.'/'.$bulan.'/filename.html',"w");
}
$title = 'title';
$subtitle = 'subtitle';
$img = 'img.jpg';
$html = <<<HTML
<!DOCTYPE html>
<html  >
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0"/>
    <meta name="google-site-verification" content="1rzeOUXtKtp3G2he6XiSyrdb9r5e9RtyfPWfP2slx1Y" />
    <title>$title</title>
    <meta itemprop="name" content="$title">
    <meta itemprop="description" content="$subtitle">
    <meta itemprop="image" content="https://chat.smooth.asia/2021/post/$img">
    <meta property="og:url" content="https://chat.smooth.asia/blog/$tahun/$bulan/filename.html">
    <meta property="og:type" content="website">
    <meta property="og:title" content="$title">
    <meta property="og:description" content="$subtitle">
    <meta property="og:image" content="https://chat.smooth.asia/2021/post/$img">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="$title">
    <meta name="twitter:description" content="$subtitle">
    <meta name="twitter:image" content="https://chat.smooth.asia/2021/post/$img">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/dropdown/css/style.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/socicon/css/styles.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/theme/css/style.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/mobirise/css/mbr-additional.css" type="text/css">
</head>
<body>
    <script src="https://suryakartanusantara.smooth.asia/index.js"></script>
    <script src="https://suryakartanusantara.smooth.asia/assets/web/assets/jquery/jquery.min.js"></script>
    <script src="https://suryakartanusantara.smooth.asia/assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
HTML;
fwrite($open, $html);
fclose($open);