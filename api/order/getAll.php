<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  
  include_once '../../config/database.php';
  include_once '../../models/order.php';

  $database = new Database();
  $db = $database->getConnection();

  $order = new Order($db);

  $result = $order->getAll();

  try {
    echo json_encode($result);
  }  
  catch (Exception $e) {
    http_response_code(500);
  }
