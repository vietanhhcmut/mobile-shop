<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  

  include_once '../../config/database.php';
  include_once '../../models/category.php';

  $database = new Database();
  $db = $database->getConnection();

  $category = new Category($db);

  $result = $category->read();

  $num = $result->rowCount();
  // var_dump($num);

  if($num > 0) {
    $posts_arr = array();
    $posts_arr['item'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $post_item = array(
        'name' => $name,
        'image'=> $image
      );
      
      array_push($posts_arr['item'], $post_item);
    }
    
    // Turn to JSON & output
    echo json_encode($posts_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No category Found')
    );
  }
