<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/product.php';

  $database = new Database();
  $db = $database->getConnection();

  $product = new Product($db);


  $data = json_decode(file_get_contents("php://input"));

  $product->categoryId = $data->categoryId;

  $result = $product->readProductOfCategory();

  $num = $result->rowCount();

  if($num > 0) {
    $posts_arr = array();
    $posts_arr['item'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
  
      $post_item = array(
        'categoryId' => $categoryId,
        'name' => $name,
        'price' => $price,
        'specialPrice' => $specialPrice,
        'discount' => $discount,
        'description' => $description,
        'manufacturer' => $manufacturer,
        'status' => $status,
        'screen' => $screen,
        'sim' => $sim,
        'memmory' => $memmory,
        'ram' => $ram,
        'bluetooth' => $bluetooth,
        'wlan' => $wlan,
        'gpu' => $gpu,
        'pin' => $pin,
        'camera' => $camera,
        'os'=>$os
      );

      // var_dump($post_item);

      array_push($posts_arr['item'], $post_item);
    }
    
    // Turn to JSON & output
    echo json_encode($posts_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Prosucts Found')
    );
  }
