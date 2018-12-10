<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/order.php';
  include_once '../../models/orderItem.php';
  include_once '../../models/cartItem.php';

  include_once '../../config/core.php';
  include_once '../../helper/authen.php';

  if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
  }
  else {
      $headers = apache_request_headers();
    
      $token = $headers["Authorization"];
    
      if (!$token) http_response_code(400); 
      else {
        $auth = authen($token, $key);
        if ($auth) {

          $userId = $auth->id; 
          
          $database = new Database();
          $db = $database->getConnection();
        
          $order = new Order($db);
          $cartitem = new CartItem($db);
        
          $data = json_decode(file_get_contents("php://input"));
        
          $cartitem->userId = $userId;
          $items = $cartitem->getUserCart();
        
          $order->totalPrice = $data->totalPrice;
          $order->city = $data->city;
          $order->district = $data->district;
          $order->wards = $data->wards;
          $order->street = $data->street;
          $order->phonenumber = $data->phonenumber;
          $order->name = $data->name;
          $order->gender = $data->gender;
          $order->email = $data->email;
         
          $orderId = $order->add();
          if ($orderId) {
            foreach ($items as $item) {
              $orderitem = new OrderItem($db);
              $orderitem->productId = $item['productId'];
              $orderitem->quantity = $item['quantity'];
              $orderitem->color = $item['color'];
              $orderitem->orderId = $orderId;
              if ($orderitem->add()) http_response_code(200);
              else http_response_code(500);
            }
          }
        
          else{
            http_response_code(500);
          }
        }
        else http_response_code(403);
      }
    
    
  }

  
