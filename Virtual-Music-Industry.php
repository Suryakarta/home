<?php
header('Access-Control-Allow-Headers: Content-Type');
$time = time();
$title = 'Virtual Music Industry';
$subtitle = 'Kemudahan bermusik dan berbagi video melalui aplikasi yang dikembangkan oleh Smooth Home Production yang mendukung semua jenis smartphone android.';
$img = 'https://suryakartanusantara.smooth.asia/assets/images/vmislide8-696x392.jpg';
    $a = <<<HTML
  <!DOCTYPE html>
<html>
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
    <meta itemprop="image" content="$img">
    <meta property="og:url" content="https://suryakartanusantara.smooth.asia">
    <meta property="og:type" content="website">
    <meta property="og:title" content="$title">
    <meta property="og:description" content="$subtitle">
    <meta property="og:image" content="$img">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="$title">
    <meta name="twitter:description" content="$subtitle">
    <meta name="twitter:image" content="$img">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/dropdown/css/style.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/socicon/css/styles.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/theme/css/style.css">
    <link rel="stylesheet" href="https://suryakartanusantara.smooth.asia/assets/mobirise/css/mbr-additional.css" type="text/css">
</head>
<body>
    <script src="https://suryakartanusantara.smooth.asia/index.js?v=$time"></script>
    <script src="https://suryakartanusantara.smooth.asia/assets/web/assets/jquery/jquery.min.js"></script>
    <script src="https://suryakartanusantara.smooth.asia/assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
HTML;
  clearstatcache();
    echo $a;
?>
