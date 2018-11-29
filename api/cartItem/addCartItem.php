<?php
  // required headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header("Access-Control-Max-Age: 3600");
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';

  $database = new Database();
  $db = $database->getConnection();

  $cartItem = new CartItem($db);

  // get posted data
  $data = json_decode(file_get_contents("php://input"));
  
  // set product property values
  $cartItem->userId = $data->userId;
  $cartItem->productId = $data->productId;
  $cartItem->quantity = $data->quantity;
  $cartItem->color = $data->color;

  
  if($cartItem->add()){
    http_response_code(200);
    echo json_encode(array("message" => "Item was added to cart."));
  }

  else{

    // set response code
    http_response_code(400);
    echo json_encode(array("message" => "Unable to add item."));
  }
  
?>