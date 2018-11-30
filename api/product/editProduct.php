<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/database.php';
  include_once '../../models/product.php';

  $database = new Database();
  $db = $database->getConnection();

  $product = new Product($db);

  $data = json_decode(file_get_contents("php://input"));

  $product->id = $data->id;
  
  $product->categoryId = $data->categoryId;
  $product->name = $data->name;
  $product->price = $data->price;
  $product->specialPrice = $data->specialPrice;
  $product->discount = $data->discount;
  $product->description = $data->description;
  $product->manufacturer = $data->manufacturer;
  $product->status = $data->status;
  $product->screen = $data->screen;
  $product->sim = $data->sim;
  $product->memmory = $data->memmory;
  $product->ram = $data->ram;
  $product->bluetooth = $data->bluetooth;
  $product->wlan = $data->wlan;
  $product->gpu = $data->gpu;
  $product->pin = $data->pin;
  $product->camera = $data->camera;
  $product->os = $data->os;


  if($product->update()){
    http_response_code(200);
    echo json_encode(array("message" => "Product was editted"));
  }

  else{

    // set response code
    http_response_code(400);
    echo json_encode(array("message" => "Unable to edit product."));
  }