<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/core.php';
  include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
  include_once '../../libs/php-jwt-master/src/ExpiredException.php';
  include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
  include_once '../../libs/php-jwt-master/src/JWT.php';
  use \Firebase\JWT\JWT;

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';
  
 
  $database = new Database();
  $db = $database->getConnection();
  
  $headers = apache_request_headers();

  if (!$headers["Authorization"]) {
    http_response_code(401);
  }

  $token = $headers["Authorization"];
  $cartItem = new CartItem($db);

  $decoded = JWT::decode($token, $key, array('HS256'));
  $cartItem->userId = $decoded->data->id;

  $result = $cartItem->getUserCart();
        
  echo json_encode($result);


?>