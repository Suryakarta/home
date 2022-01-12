<?php
require "koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$uid = $posts->uid;
$id = $posts->id;
$name = $posts->name;
$text = $posts->text;
$time = $posts->times;
$date = $posts->dates;
$type = $posts->pic->type;
$file = $posts->pic->data;
$mime = $posts->pic->mimeType;
$latitude = $posts->pic->latitude;
if($posts){
    $ew = mysqli_query($connect,"SELECT token,uid FROM token");
    while($data = mysqli_fetch_array($ew)) {
        if($uid == $data[1]){
        }else{
            $fields = array(
                "to" => $data[0],
                "notification"=>array(
                    "body" => $text,
                    "title" => $name,
                    "icon" =>'icon',
                ),
                "data"=>array(
                    "notification_body" => $text,
                    "notification_title"=> $name,
                    "notification_foreground"=> "true",
                    "notification_android_channel_id"=> "fcm_default_channel",
                    "notification_android_priority"=> "2",
                    "notification_android_visibility"=> "1",
                    "notification_android_color"=> "#ff0000",
                    "notification_android_icon"=> "coffee",
                    "notification_android_sound"=> "crystal",
                    "notification_android_vibrate"=> "500, 200, 500",
                    "notification_android_lights"=> "#ffff0000, 250, 250",
                    "times" => $time,
                    "dates" => $date,
                    "uid" => $uid,
                    "ids" => $id,
                    "type" => $type,
                    "pic" => $type,
                    "file" => $file,
                    "mimeType" => $mime,
                    "latitude" => $latitude,
                    "longitude" => $longitude
                )
            );
            $headers=array(
                'Authorization: key=AAAAQKOYO2E:APA91bECo0Q4s5xk_r_pri3S9h17DAK91yewQlBgthRb_74A6LMPa9rKVvclnCVZj47aQHMK4FO0dXV2wcL9gOo7X4AbWY4MNSlhq5mKVDxBaTXtRqgdzzDEokLCquO47N8pftprFOO_ ',
                'Content-Type:application/json'
            );
            $ch=curl_init();
            curl_setopt($ch,CURLOPT_URL,"https://fcm.googleapis.com/fcm/send");
            curl_setopt($ch,CURLOPT_POST,true);
            curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
            curl_exec($ch);
            curl_close($ch);   
        }
        echo 1;
    }
}
?>
