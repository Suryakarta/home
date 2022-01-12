<?php
header('Access-Control-Allow-Headers: Content-Type');
$time = time();
$title = 'concact yayasan marhaenis mukmin suryakarta nusantara';
$subtitle = 'Yayasan Marhaenis Mukmin | Suryakarta Nusantara &amp; Kami generasi muda yang merasa terpanggil untuk memberikan Darma Bakti bagi kebangkitan jiwa ber-Kebangsaan dan ber-Ketuhanan yang maha esa berlandasan azaz Bhineka Tunggal Ika. Yayasan ini adalah wadah bagi siapaun untuk bergerak dalam sebuah pergerakan yang didasari jiwa nasionalis yang tinggi dengan diimbangi dengan nilai-nilai keagamaan, tanpa memandang suku, ras, budaya apapun bahkan agama yang dianut. Dan kami menyebutnya Bangkitkan Jiwa Nasionalis Religius.';
$img = 'https://suryakartanusantara.smooth.asia/assets/images/logo1.png';
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
    <link rel="stylesheet" href="assets/web/assets/mobirise-icons2/mobirise2.css">
    <link rel="stylesheet" href="assets/tether/tether.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="assets/dropdown/css/style.css">
    <link rel="stylesheet" href="assets/socicon/css/styles.css">
    <link rel="stylesheet" href="assets/theme/css/style.css">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,400;1,700&display=swap&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,400;1,700&display=swap&display=swap">
    </noscript>
    <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5890023057020023" crossorigin="anonymous"></script>
    <script src="assets/web/assets/jquery/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
    <script async src="concact.js?v=$time"></script>
</body>
</html>
HTML;
  clearstatcache();
    echo $a;
?>
