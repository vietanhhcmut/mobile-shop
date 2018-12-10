<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';
  
  $database = new Database();
  $db = $database->getConnection();
  
  include_once '../../config/core.php';
  // include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
  // include_once '../../libs/php-jwt-master/src/ExpiredException.php';
  // include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
  // include_once '../../libs/php-jwt-master/src/JWT.php';
  // use \Firebase\JWT\JWT;

  include_once '../../models/user.php';

  include_once '../../helper/authen.php';

  if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
  }
  else {
      $headers = apache_request_headers();
    
      $token = $headers["Authorization"];
    
      if (!$token) http_response_code(400); 
      else {
        $auth = authen($token, $key);
        if ($auth) {
          $userId = $auth->id; 
      
          $cartItem = new CartItem($db);
          $cartItem->userId = $userId;
          
          $result = $cartItem->getUserCart();
          
          echo json_encode($result);
        }
        else http_response_code(403);
      }
    
    
  }
  
?>