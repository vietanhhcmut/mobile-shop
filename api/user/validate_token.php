<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
  http_response_code(200);
}
else {
  $data = json_decode(file_get_contents("php://input"));
  $headers = apache_request_headers();
  $jwt = $headers['Authorization'];

  $url = $_SERVER['DOCUMENT_ROOT'];
  include_once $url . '/config/core.php';
  include_once $url. '/helper/authen.php';

  if ($jwt) {
    $id = authen($jwt, $key);
    echo json_encode($id);
  }
  else {
    http_response_code(403);
  }
}
?>