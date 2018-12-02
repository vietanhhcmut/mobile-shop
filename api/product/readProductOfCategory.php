<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/product.php';

  $database = new Database();
  $db = $database->getConnection();

  $product = new Product($db);


  $data = json_decode(file_get_contents("php://input"));

  $product->categoryId = $data->categoryId;

  $result = $product->readProductOfCategory();

  $products_arr = array();
  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
      array_push($products_arr, $row);
  }
  // Turn to JSON & output
  echo json_encode($products_arr);
