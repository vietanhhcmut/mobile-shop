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
  
    $data = json_decode(file_get_contents("php://input"));
    $headers = apache_request_headers();
    $jwt = $headers['Authorization'];
  
    $url = $_SERVER['DOCUMENT_ROOT'];
    include_once $url . '/config/core.php';
    include_once $url. '/helper/authen.php';
    echo json_encode($data);

    if ($jwt && authen($jwt, $key)) {
      $id = authen($jwt, $key);
      $user->id = $id;
      $result = $user->findUser();
      if ($result) {
        if ($data->password) {
          if (password_verify($data->passOld, $user->password)) {
            try {
              $user->firstname = htmlspecialchars(strip_tags($data->firstname));
              $user->lastname = htmlspecialchars(strip_tags($data->lastname));
              $user->email = htmlspecialchars(strip_tags($data->email));
              $user->password = $data->password;
              $user->gender = $data->gender;
              $user->birthday = $data->birthday;
              $user->id = $id;

              if($user->update()) {
                http_response_code(200);
              }
              else {
                http_response_code(500);
              }
              
            } catch (Exception $e) {    
              http_response_code(500);
            }
          }
          else {
            http_response_code(400);
          }
        }
        else {
          try {
            $user->firstname = $data->firstname;
            $user->lastname = $data->lastname;
            $user->email = $data->email;
            $user->gender = $data->gender;
            $user->birthday = $data->birthday;
            $user->id = $id;

            if($user->updateNoPass()) {
              http_response_code(200);
            }
            else {
              http_response_code(500);
            }
            
          } catch (Exception $e) {    
            http_response_code(500);
          }
        }
      }
      else {
        http_response_code(401);
      }
    }
    else {
      http_response_code(403);
    }
  }

?>