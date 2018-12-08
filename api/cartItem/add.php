<?php
  // required headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';

  $database = new Database();
  $db = $database->getConnection();

  $headers = apache_request_headers();

  if (!$headers["Authorization"]) {
    http_response_code(401);
  }

  $token = $headers["Authorization"];
  $data = json_decode(file_get_contents("php://input"));

  $cartItem = new CartItem($db);

  $decoded = JWT::decode($token, $key, array('HS256'));

  $cartItem->userId = $decoded->data->id;
  $cartItem->productId = $data->productId;
  $cartItem->quantity = $data->quantity;
  $cartItem->color = $data->color;

  if ($cartItem->add()) http_response_code(200);
  else http_response_code(400);
?>