<?php
require "../koneksi.php";
$post = file_get_contents('php://input');
$posts = json_decode($post);
$a = $posts->text;
$b = mysqli_query($connect,"SELECT * FROM user WHERE name LIKE '%$a%' LIMIT 0,100");
while($data = mysqli_fetch_array($b) ) {
        $echo[] =  array(
                id => $data[1],
                name => $data[2],
                email => $data[3],
                phone => $data[4],
                pic => $data[5]
        ); 
}
echo json_encode($echo);
