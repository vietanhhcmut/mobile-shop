<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/product.php';

  $database = new Database();
  $db = $database->getConnection();

  $product = new Product($db);

  $product->categoryId = isset($_GET['categoryId']) ? $_GET['categoryId'] : die();
  $product->currentPage = isset($_GET['page']) ? intval($_GET['page']) : die();
  $result = $product->getCategoryProds();

  // Turn to JSON & output
  echo json_encode($result);
