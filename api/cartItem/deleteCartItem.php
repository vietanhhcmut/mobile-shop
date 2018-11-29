<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';
 
  $database = new Database();
  $db = $database->getConnection();
  
  $cartItem = new CartItem($db);

  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $cartItem->id = $data->id;

  // Delete 
  if($cartItem->delete()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Item was deleted')
    );
  } else {
    http_response_code(401);
    echo json_encode(
      array('message' => 'Unable to delete item')
    );
  }
