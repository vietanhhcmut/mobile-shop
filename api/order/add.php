<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/order.php';

  $database = new Database();
  $db = $database->getConnection();

  $order = new Order($db);

  $data = json_decode(file_get_contents("php://input"));

  $order->feeShip = $data->feeShip;
  $order->totalPrice = $data->totalPrice;
  $order->city = $data->city;
  $order->district = $data->district;
  $order->ward = $data->ward;
  $order->address = $data->address;
  $order->phonenumber = $data->phonenumber;
  $order->type = $data->type;
 
  if($order->add()){
    http_response_code(200);
    echo json_encode(array("message" => "Order was added"));
  }

  else{

    // set response code
    http_response_code(400);
    echo json_encode(array("message" => "Unable to add order."));
  }
  
