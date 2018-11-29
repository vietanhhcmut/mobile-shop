<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once 'config/database.php';
  include_once 'objects/cartItem.php';
 
  $database = new Database();
  $db = $database->getConnection();
  
  $cartItem = new CartItem($db);

  $data = json_decode(file_get_contents("php://input"));

  $cartItem->id = $data->id;
  $cartItem->userId = $data->userId;
  $cartItem->productId = $data->productId;
  $cartItem->color = $data->color;
  $cartItem->quantity = $data->quantity;

  // Update post
  if($cartItem->edit()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Item was edited')
    );
  } else {
    http_response_code(401);
    echo json_encode(
      array('message' => 'Unable to edit item')
    );
  }
