<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once 'config/database.php';
  include_once 'objects/cartItem.php';
 
  $database = new Database();
  $db = $database->getConnection();
  
  $cartItem = new CartItem($db);

  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $cartItem->userId = $data->userId;

  $result = $cartItem->getCartOfUser();
  $num = $result->rowCount();

  if($num > 0) {
    $posts_arr = array();
    $posts_arr['item'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      $post_item = array(
        'userId' => $userId,
        'productId' => $productId,
        'quantity' => $quantity,
        'color' => $color
      );
      array_push($posts_arr['item'], $post_item);
    }
    // Turn to JSON & output
    echo json_encode($posts_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No item was founded')
    );
  }