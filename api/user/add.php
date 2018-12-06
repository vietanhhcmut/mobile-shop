<?php
  // required headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header("Access-Control-Max-Age: 3600");
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/user.php';

  $database = new Database();
  $db = $database->getConnection();

  $user = new User($db);
  $data = json_decode(file_get_contents("php://input"));
        
  $user->firstname = $data->firstname;
  $user->lastname = $data->lastname;
  $user->email = $data->email;
  $user->password = $data->password;
  $user->gender = $data->gender;
  $user->birthday = $data->birthday;
  $user->isAdmin = 0;

  // var_dump($user->emailExists());

  if ($user->emailExists()){
    http_response_code(409); //Conflict
    echo json_encode(array("message" => "This email already registered"));
  }
  else {
    if($user->add()){
      http_response_code(200);
      echo json_encode(array("message" => "User was added."));
    }
    else{
      http_response_code(403);
      echo json_encode(array("message" => "Unable to add user."));
    }
   
  }
  
?>