<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/category.php';

  $database = new Database();
  $db = $database->getConnection();

  $category = new Category($db);

  $data = json_decode(file_get_contents("php://input"));

  $category->id = $data->id;
  
  $category->name = $data->name;
  $category->image = $data->image;

  if($category->update()) {
    http_response_code(200);
    echo json_encode(
      array('message' => 'Catalog was editted')
    );
  } else {
    http_response_code(401);
    echo json_encode(
      array('message' => 'Unable to edit category')
    );
  }

