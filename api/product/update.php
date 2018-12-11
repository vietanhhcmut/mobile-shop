<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
  }
  else {
    include_once '../../config/database.php';
    include_once '../../models/user.php';
    include_once '../../models/product.php';
    include_once '../../models/image.php';
    
    $database = new Database();
    $db = $database->getConnection();
    $user = new User($db);
    $product = new Product($db);
    $image = new Image($db);
    $data = json_decode(file_get_contents("php://input"));
    $headers = apache_request_headers();
    $jwt = $headers['Authorization'];
  
    $url = $_SERVER['DOCUMENT_ROOT'];
    include_once $url . '/config/core.php';
    include_once $url. '/helper/authen.php';
  
    if ($jwt && authen($jwt, $key)) {
      $id = authen($jwt, $key);
      $user->id = $id;
      $result = $user->findUser();
      if ($result) {
        if ($user->isAdmin) {

          $product->id = $data->id;
          $product->categoryId = $data->categoryId;
          $product->name = $data->name;
          $product->price = $data->price;
          $product->saleoff = $data->saleoff;
          $product->description = $data->description;
          $product->screen = $data->screen;
          $product->sim = $data->sim;
          $product->memory = $data->memory;
          $product->ram = $data->ram;
          $product->bluetooth = $data->bluetooth;
          $product->wlan = $data->wlan;
          $product->gps = $data->gps;
          $product->pin = $data->pin;
          $product->camera = $data->camera;
          $product->os = $data->os;

          if($product->update()) {

            $image->productId = $product->id;

            if ($image->delete()) {
              http_response_code(200);
            } else {
              http_response_code(400);
            }
            foreach ($data->imgs as $item) {
              $image_new = new Image($db);
              $image_new->path = $item;
              $image_new->productId = $product->id;
              $image_new->add();
            }
            http_response_code(200);
            echo json_encode(
              array('message' => 'Product was updated.')
            );
          } else {
            http_response_code(401);
            echo json_encode(
              array('message' => 'Unable to update product')
            );
          }
        }
        else {
          http_response_code(403);
          echo json_encode(array("message" => "Access denied"));
        }
      }
      else {
        http_response_code(403);
      }
    }
    else {
      http_response_code(403);
    }
  }