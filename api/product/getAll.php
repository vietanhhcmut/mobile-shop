<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  

  include_once '../../config/database.php';
  include_once '../../models/product.php';

  $database = new Database();
  $db = $database->getConnection();

  $product = new Product($db);

  $result = $product->getAll();

  $products_arr = array();

  // while($row = $result->fetch(PDO::FETCH_ASSOC)) {
  //   array_push($products_arr, $row);
  // }
  
  // // Turn to JSON & output
  // echo json_encode($products_arr);
  echo json_encode($result);

