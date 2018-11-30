<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/review.php';

  $database = new Database();
  $db = $database->getConnection();

  $review = new Review($db);

  $data = json_decode(file_get_contents("php://input"));

  $review->name = $data->name;
  $review->productId = $data->productId;
  $review->email = $data->email;
  $review->content = $data->content;

  // Create product
  if($review->create()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Review was created')
    );
  } else {
    http_response_code(400);
    echo json_encode(
      array('message' => 'Unable to create review')
    );
  }
