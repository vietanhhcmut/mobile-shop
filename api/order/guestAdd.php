<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/order.php';
  include_once '../../models/orderItem.php';

  $database = new Database();
  $db = $database->getConnection();

  $order = new Order($db);

  $data = json_decode(file_get_contents("php://input"));

  $order->totalPrice = $data->totalPrice;
  $order->city = $data->city;
  $order->district = $data->district;
  $order->wards = $data->wards;
  $order->street = $data->street;
  $order->phonenumber = $data->phonenumber;
  $order->name = $data->name;
  $order->gender = $data->gender;
  $order->email = $data->email;
  $order->paid = $data->paid;

  $orderId = $order->add();
  if ($orderId) {
    foreach ($data->cart as $item) {
        $orderitem = new OrderItem($db);
        $orderitem->productId = $item->productId;
        $orderitem->quantity = $item->quantity;
        $orderitem->color = $item->color;
        $orderitem->orderId = $orderId;
        $orderitem->add();
    }
    http_response_code(200);
  } 
  else http_response_code(500);

