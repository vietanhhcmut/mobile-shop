<?php
  include_once '../../config/core.php';
  include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
  include_once '../../libs/php-jwt-master/src/ExpiredException.php';
  include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
  include_once '../../libs/php-jwt-master/src/JWT.php';
  use \Firebase\JWT\JWT;

  include_once '../../models/user.php';
  
  $headers = apache_request_headers();

  $token = $headers["Authorization"];

  $decoded = JWT::decode($token, $key, array('HS256'));

  $user = new User($db);
  $userId = $decoded->data->id;
  $user->id = $userId;
  if (!$user->findUser()) http_response_code(401);    