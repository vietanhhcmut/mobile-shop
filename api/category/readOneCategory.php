<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/database.php';
  include_once '../../models/category.php';

  $database = new Database();
  $db = $database->getConnection();

  $category = new Category($db);

  $category->id = isset($_GET['id']) ? $_GET['id'] : die();

  $category->read_single();

  // Create array
  $post_arr = array(
    'name' => $category->name,
    'image'=> $category->image
  );

  // Make JSON
  print_r(json_encode($post_arr));

