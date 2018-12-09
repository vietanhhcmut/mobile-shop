<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  
  include_once '../../config/database.php';
  include_once '../../models/order.php';

  $database = new Database();
  $db = $database->getConnection();

  $order = new Order($db);

  $result = $order->read();

  $num = $result->rowCount();
  // var_dump($num);

  if($num > 0) {
    $orders_arr = array();
    // $orders_arr['item'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
    
      // $order_item = array(
      //   'feeShip' => $feeShip,
      //   'totalPrice' => $totalPrice,
      //   'city' => $city,
      //   'district' => $district,
      //   'ward' => $ward,
      //   'address' => $address,
      //   'type' => $type,
      //   'phonenumber'=> $phonenumber
        
      // );
      array_push($orders_arr, $row);
    }
    
    // Turn to JSON & output
    echo json_encode($orders_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No order found')
    );
  }
