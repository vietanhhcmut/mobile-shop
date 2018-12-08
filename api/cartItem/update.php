<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';  

  $database = new Database();
  $db = $database->getConnection();

  include_once './auth.php';

  $cartItem = new CartItem($db);

  $cartItem->userId = $userId;

  $data = json_decode(file_get_contents("php://input"));
  $cartItem->productId = $data->productId;
  $cartItem->quantity = $data->quantity;
  $cartItem->color = $data->color;
  
  $result = $cartItem->update();
  
  if ($result) http_response_code(200);
  else http_response_code(400);