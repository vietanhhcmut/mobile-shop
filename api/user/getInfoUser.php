<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
  http_response_code(200);
}
else {
  include_once '../../config/database.php';
  include_once '../../models/user.php';
  
  $database = new Database();
  $db = $database->getConnection();
  $user = new User($db);
  
  $headers = apache_request_headers();
  $jwt = $headers['Authorization'];

  $url = $_SERVER['DOCUMENT_ROOT'];
  include_once $url . '/config/core.php';
  include_once $url. '/helper/authen.php';
  
  if ($jwt && authen($jwt, $key)) {
    $id = authen($jwt, $key);
    if($id->id != NULL){
      $user->id = $id->id;
      $result = $user->findUser();
      if ($result) {
        http_response_code(200);
        echo json_encode(array(
          "id" => $user->id,
          "firstname" => $user->firstname,
          "lastname" => $user->lastname,
          "email" => $user->email,
          "isAdmin" => $user->isAdmin,
          "gender" => $user->gender,
          "birthday"=>$user->birthday,
      ));
      }
      else {
        http_response_code(403);
      }
    }
    else {
      http_response_code(403);
    }
  }
}
?>