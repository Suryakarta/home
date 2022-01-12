<?php
require "koneksi.php";
$uid = 'asdas';
$ew = mysqli_query($connect,"SELECT kolom FROM berita WHERE jam = '$uid'");
while($data = mysqli_fetch_array($ew)) {
        $video[] = $data[0];
}
$ews = mysqli_query($connect,"SELECT video FROM points WHERE user = '$uid'");
while($dats = mysqli_fetch_array($ews)) {
        $video[] = $dats[0];
}
$videos = array_unique($video);
foreach ($videos as $key) {
        $vid = mysqli_query($connect,"SELECT id,tanggal,jam,berita,kolom FROM berita WHERE kolom LIKE '$key' AND berita = '1' ORDER BY tanggal DESC");
        while($datas = mysqli_fetch_array($vid)) {
                $user = mysqli_fetch_array(mysqli_query($connect,"SELECT jam FROM berita WHERE id LIKE '$datas[0]'"))[0];
                $return_arr[] = array(
                        times => $datas[1],
                        name => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$datas[2]' "))[0],
                        kolom => 1,
                        user => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$user' "))[0],
                        video => $datas[4],
                );
        }
}
foreach ($videos as $key) {
        $vid = mysqli_query($connect,"SELECT * FROM points WHERE video LIKE '$key' ORDER BY tanggal DESC");
        while($datas = mysqli_fetch_array($vid)) {
                $return_arr[] = array(
                        times => $datas[tanggal],
                        name => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$datas[user]' "))[0],
                        kolom => 0,
                        user => mysqli_fetch_array(mysqli_query($connect,"SELECT nama FROM tblmahasiswa WHERE id LIKE '$datas[band]' "))[0],
                        video => $datas[video]
                );
        }
}
$keys = array_column($return_arr, 'times');
array_multisort($keys, SORT_DESC, $return_arr);
echo json_encode($return_arr);