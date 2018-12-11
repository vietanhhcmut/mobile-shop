<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header('Access-Control-Allow-Methods: DELETE');
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
    $userDelete = new User($db);

    $data = json_decode(file_get_contents("php://input"));
    $headers = apache_request_headers();
    $jwt = $headers['Authorization'];
  
    $url = $_SERVER['DOCUMENT_ROOT'];
    include_once $url . '/config/core.php';
    include_once $url. '/helper/authen.php';
  
    if ($jwt && authen($jwt, $key)) {
      $id = authen($jwt, $key);
      $user->id = $id;
      $result = $user->findUser();
      if ($result) {
        echo json_decode($id);
        if ($user->isAdmin) {

          $userDelete->id = $data->id;
          if($userDelete->delete()){
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
        else {
          http_response_code(403);
          echo json_encode(array("message" => "Access denied"));
        }
      }
      else {
        http_response_code(403);
      }
    }
    else {
      http_response_code(403);
    }
  }
?>