<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
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

  $token = $headers["Authorization"];

  if (true) {
    $cartItem = new CartItem($db);
    
    $decoded = JWT::decode($token, $key, array('HS256'));

    $cartItem->userId = $decoded->data->id;

    $data = json_decode(file_get_contents("php://input"));
    $cartItem->productId = $data->productId;
    $cartItem->quantity = $data->quantity;
    $cartItem->color = $data->color;
    
    $result = $cartItem->update();
    
    if ($result) http_response_code(200);
    else http_response_code(400);
  }
  else {
    http_response_code(401);    
  }
