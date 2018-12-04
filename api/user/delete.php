<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header('Access-Control-Allow-Methods: DELETE');
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


  // required to encode json web token
  include_once '../../config/core.php';
  include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
  include_once '../../libs/php-jwt-master/src/ExpiredException.php';
  include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
  include_once '../../libs/php-jwt-master/src/JWT.php';
  use \Firebase\JWT\JWT;


  // files needed to connect to database
  include_once '../../config/database.php';
  include_once '../../models/user.php';
  
  // get database connection
  $database = new Database();
  $db = $database->getConnection();
  
  // instantiate user object
  $user = new User($db);


  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  
  $headers = apache_request_headers();
  $jwt = $headers['Authorization'];

  if($jwt){
    try{
      $decoded = JWT::decode($jwt, $key, array('HS256'));

      $user->id = $decoded->data->id;

      if($user->delete()){
        http_response_code(200);

        echo json_encode(
              array(
                  "message" => "User was deleted."
              )
          );
      }

      else {
        http_response_code(401);

        echo json_encode(array("message" => "Unable to delete user."));
      }
    }

    // if decode fails, it means jwt is invalid
    catch (Exception $e){
      // set response code
      http_response_code(403);

      // show error message
      echo json_encode(array(
          "message" => "Access denied.",
          "error" => $e->getMessage()
      ));
    }
  }

  // show error message if jwt is empty
  else{
  
    // set response code
    http_response_code(403);

    // tell the user access denied
    echo json_encode(array("message" => "Access denied."));
  }
?>