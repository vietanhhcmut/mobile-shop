<?php
  // required headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/user.php';
 
  $database = new Database();
  $db = $database->getConnection();
  $user = new User($db);

  $data = json_decode(file_get_contents("php://input"));
  $user->email = $data->email;
  $email_exists = $user->emailExists();
 
  include_once '../../config/core.php';
  include_once '../../libs/php-jwt-master/src/JWT.php';
  use \Firebase\JWT\JWT;

  if($email_exists && password_verify($data->password, $user->password)) {
    $token = array(
      "iss" => $iss,
      "aud" => $aud,
      "iat" => $iat,
      "nbf" => $nbf,
      "data" => array(
          "id" => $user->id,
          "isAdmin" => $user->isAdmin
      )
    );
    http_response_code(200);
    $jwt = JWT::encode($token, $key);
    echo json_encode(
            array(
                "token" => $jwt
            )
            );
  }
  else {
    http_response_code(401);
    echo json_encode(array("message" => "Login failed."));
  }
      
?>
