<?php
$url = $_SERVER['DOCUMENT_ROOT'];

// include_once $url . '/config/core.php';
include_once $url . '/libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

function authen($token, $key) {
    try {
          $decoded = JWT::decode($token, $key, array('HS256'));
          return $decoded->data;
          // Notice!!!
          // May get info of user and check any conditions here, then return any info in need
    }
    catch (Exception $e) {
        return null;
    }
}
?>
