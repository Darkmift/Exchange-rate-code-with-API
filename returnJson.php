<?php
$str = file_get_contents('number.json');
$str = json_decode($str);
echo json_encode($str);
