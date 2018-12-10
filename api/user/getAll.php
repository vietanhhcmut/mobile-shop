<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  

  include_once '../../config/database.php';
  include_once '../../models/user.php';

  $database = new Database();
  $db = $database->getConnection();

  $user = new User($db);

  $result = $user->getAll();

  $user_arr = array();

  while($row = $result->fetch(PDO::FETCH_ASSOC)) {
    array_push($user_arr, $row);
  }
  
  // Turn to JSON & output
  echo json_encode($user_arr);

