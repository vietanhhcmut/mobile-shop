<?php 
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/review.php';

  $database = new Database();
  $db = $database->getConnection();

  $review = new Review($db);

  $review->productId = isset($_GET['productId']) ? $_GET['productId'] : die();

  $result = $review->getProductReviews();

  echo json_encode($result); 