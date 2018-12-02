<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


  include_once '../../config/database.php';
  include_once '../../models/review.php';

  $database = new Database();
  $db = $database->getConnection();

  $review = new Review($db);

  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $review->id = $data->id;

  // Delete 
  if($review->delete()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Review was deleted')
    );
  } else {
    http_response_code(400);
    echo json_encode(
      array('message' => 'Unable to delete review')
    );
  }
