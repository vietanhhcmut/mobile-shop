<?php
  // required headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header("Access-Control-Max-Age: 3600");
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once 'config/database.php';
  include_once 'objects/user.php';

  $database = new Database();
  $db = $database->getConnection();

  $user = new User($db);

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  
  // set product property values
  $user->firstname = $data->firstname;
  $user->lastname = $data->lastname;
  $user->email = $data->email;
  $user->password = $data->password;
  $user->gender = $data->gender;
  $user->birthday = $data->birthday;

  var_dump($user);
  if (!($user->emailExists())){
      // create the user
    if($user->create()){
    
      // set response code
      http_response_code(200);

      // display message: user was created
      echo json_encode(array("message" => "User was created."));
    }

    // message if unable to create user
    else{

      // set response code
      http_response_code(400);

      // display message: unable to create user
      echo json_encode(array("message" => "Unable to create user."));
    }
  }
  else if ($user->emailExists()) {
    http_response_code(409); //Conflict
    echo json_encode(array("message" => "This email already registered"));
  }
  
  
?>