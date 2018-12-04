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

  $result = $category->getOne();

  // Make JSON
  echo json_encode($result);

