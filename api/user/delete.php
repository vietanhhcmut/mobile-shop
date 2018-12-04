<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header('Access-Control-Allow-Methods: DELETE');
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  include_once '../../config/core.php';
  include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
  include_once '../../libs/php-jwt-master/src/ExpiredException.php';
  include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
  include_once '../../libs/php-jwt-master/src/JWT.php';
  use \Firebase\JWT\JWT;

  include_once '../../config/database.php';
  include_once '../../models/user.php';

  $database = new Database();
  $db = $database->getConnection();
  
  $user = new User($db);
  $data = json_decode(file_get_contents("php://input"));
  
  $headers = apache_request_headers();
  $jwt = $headers['Authorization'];

  if($jwt){
    try{
      $decoded = JWT::decode($jwt, $key, array('HS256'));
      $user->id = $decoded->data->id;
      // var_dump($decoded->data->isAdmin);
      if ($decoded->data->isAdmin) {
        if($user->delete()){
          http_response_code(200);
  
          echo json_encode(
                array(
                    "message" => "User was deleted."
                )
            );
        }
        else{
          http_response_code(401);
          echo json_encode(array("message" => "Unable to delete user."));
        }
      }
      else{
        http_response_code(403);
        echo json_encode(array("message" => "Access denied"));
      }     
    }
    catch (Exception $e){
      http_response_code(403);
      echo json_encode(array(
          "message" => "Access denied.",
          "error" => $e->getMessage()
      ));
    }
  }
  else{
    http_response_code(403);
    echo json_encode(array("message" => "Access denied."));
  }
?>