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

  if($data != NULL){
    $user->id = $data->id; 
    $result = $user->findUser();

    if ($result == 1) {
      http_response_code(200);
      echo json_encode(array(
        "id" => $user->id,
        "firstname" => $user->firstname,
        "lastname" => $user->lastname,
        "email" => $user->email,
        "isAdmin" => $user->isAdmin,
        "gender" => $user->gender,
        "birthday"=>$user->birthday,
        "password"=>$user->password
    ));
    }
    else {
      http_response_code(403);
        echo json_encode(array("message" => "No user"));
    }
  }
  
  
?>