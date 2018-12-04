<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  

  include_once '../../config/database.php';
  include_once '../../models/category.php';

  $database = new Database();
  $db = $database->getConnection();

  $category = new Category($db);

  $result = $category->getAll();

  $categories_arr = array();

  while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    array_push($categories_arr, $row);
  }
  
  // Turn to JSON & output
  echo json_encode($categories_arr);

