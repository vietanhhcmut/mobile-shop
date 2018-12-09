<?php

include_once '../config/core.php';
include_once '../libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;

function authen($token) {
    try {
          $decoded = JWT::decode($token, $key, array('HS256'));
          return $decoded->data;
          // Notice!!!
          // May get info of user and check any conditions here, then return any info in need
    }
    catch (Exception $e) {
        return false;
    }
}
?>


<!--

    Example:
    When one person send request to delete an item in cart

    First:
        check if that item is theirs by following steps:
        1. Get token from header, if there is no token, response status 403 (not 401, 401 is only for login fail)
        otherwise go to step 2
        2. Pass that token into function authen above, if it return false, response status 403
        otherwise, we already had id of user, go to step 3
        3. Get userId of that item, compare that userId and the id we just got.
    Second: If everything is ok, delete that item and response successfully



    Code: 
    $headers = apache_request_headers();
    $jwt = $headers['Authorization'];

    if ($jwt && authen($jwt)) {
        // We would have id of user here and check... 
    }
    else {
        response fail
    }
 -->