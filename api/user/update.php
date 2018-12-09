<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

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

  if ($jwt) {
    // $id = authen($jwt, $key);
    echo json_encode("hi");
  }
  else {
    http_response_code(403);
  }


  // $number = strlen($jwt);
  // if ($number) {
  //   // $id = authen($jwt, $key);
  //   // echo json_encode($id);
  //   echo json_decode("hihi");

  // }
  // else {
  //   http_response_code(403);
  //   echo json_decode("hi");
  // }

  // if(true) {  
  //   try {
  //     $decoded = JWT::decode($jwt, $key, array('HS256'));  
  //     $user->firstname = $data->firstname;
  //     $user->lastname = $data->lastname;
  //     $user->email = $data->email;
  //     $user->password = $data->password;
  //     $user->gender = $data->gender;
  //     $user->birthday = $data->birthday;
  //     $user->isAdmin = $data->isAdmin;
  //     $user->id = $decoded->data->id;

  //     if($user->update()) {
  //       $token = array(
  //         // "iss" => $iss,
  //         // "aud" => $aud,
  //         // "iat" => $iat,
  //         // "nbf" => $nbf,
  //         "data" => array(
  //             "id" => $user->id,
  //             "isAdmin" => $user->isAdmin
  //         )
  //       );
  //       $jwt = JWT::encode($token, $key);
  //       http_response_code(200);
  //       echo json_encode(
  //             array(
  //                 "jwt" => $jwt
  //             )
  //         );
  //       }
  //     else {
  //       http_response_code(401);
  //       echo json_encode(array("message" => "Unable to update user."));
  //     }
  //   }
  //   catch (Exception $e) {    
  //     http_response_code(401);
  //     echo json_encode(array(
  //         "message" => "Unable to update user.",
  //         "error" => $e->getMessage()
  //     ));
  //   }
  // }

  // else {
  //   http_response_code(403);
  //   echo json_encode(array("message" => "Access denied."));
  // }
?>