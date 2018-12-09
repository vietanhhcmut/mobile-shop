<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/cartItem.php';
  
  $database = new Database();
  $db = $database->getConnection();
  
  include_once './auth.php';

  $cartItem = new CartItem($db);
  
  $cartItem->userId = $userId;
  
  $result = $cartItem->getUserCart();
  
  echo json_encode($result);
?>