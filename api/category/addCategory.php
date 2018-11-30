<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/category.php';

  $database = new Database();
  $db = $database->getConnection();

  $category = new Category($db);

  $data = json_decode(file_get_contents("php://input"));

  $category->image = $data->image;
  $category->name = $data->name;

  // Create product
  if($category->add()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Catalog was created')
    );
  } else {
    http_response_code(401);
    echo json_encode(
      array('message' => 'Unable to create category')
    );
  }
