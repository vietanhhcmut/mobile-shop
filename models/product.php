<?php 
  class Product {
    // DB stuff
    private $conn;
    private $table = 'products';

    // Post Properties
    public $id;
    // public $catalog_name;
    public $categoryId;
    public $name;
    public $price;
    public $specialPrice;
    public $discount;
    public $description;
    public $manufacturer;
    public $status;
    public $screen;
    public $sim;
    public $memmory;
    public $ram;
    public $bluetooth;
    public $wlan;
    public $gpu;
    public $pin;
    public $camera;
    public $os;

    public function __construct($db) {
      $this->conn = $db;
    }

    // Get product
    public function read() {
      $query = 'SELECT 
            -- c.name as categoryName,
            p.categoryId,
            p.name,
            p.price,
            p.specialPrice,
            p.discount,
            p.description,
            p.manufacturer,
            p.status,
            p.screen,
            p.sim,
            p.bluetooth,
            p.memmory,
            p.ram,
            p.wlan,
            p.gpu,
            p.pin,
            p.camera,
            p.os
          FROM
            ' . $this->table . ' p';
          // LEFT JOIN
          //   category c ON p.categoryId = c.id';
         
      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      return $stmt;
    }

    // Add product
    public function add() {
      // Create query
      $query = 'INSERT INTO ' . 
          $this->table . '
        SET
          name = :name,
          categoryId = :categoryId,
          price = :price,
          specialPrice = :specialPrice,
          discount = :discount,
          description = :description,
          manufacturer = :manufacturer,
          status = :status,
          screen = :screen,
          sim = :sim,
          memmory = :memmory,
          ram = :ram,
          bluetooth = :bluetooth,
          wlan = :wlan,
          gpu = :gpu,
          pin = :pin,
          camera = :camera,
          os = :os';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->categoryId = htmlspecialchars(strip_tags($this->categoryId));
      $this->price = htmlspecialchars(strip_tags($this->price));
      $this->specialPrice = htmlspecialchars(strip_tags($this->specialPrice));
      $this->discount = htmlspecialchars(strip_tags($this->discount));
      $this->description = htmlspecialchars(strip_tags($this->description));
      $this->manufacturer = htmlspecialchars(strip_tags($this->manufacturer));
      $this->status = htmlspecialchars(strip_tags($this->status));
      $this->screen = htmlspecialchars(strip_tags($this->screen));
      $this->sim = htmlspecialchars(strip_tags($this->sim));
      $this->memmory = htmlspecialchars(strip_tags($this->memmory));
      $this->ram = htmlspecialchars(strip_tags($this->ram));
      $this->bluetooth = htmlspecialchars(strip_tags($this->bluetooth));
      $this->wlan = htmlspecialchars(strip_tags($this->wlan));
      $this->gpu = htmlspecialchars(strip_tags($this->gpu));
      $this->pin = htmlspecialchars(strip_tags($this->pin));
      $this->camera = htmlspecialchars(strip_tags($this->camera));
      $this->os = htmlspecialchars(strip_tags($this->os));
      
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':categoryId', $this->categoryId);
      $stmt->bindParam(':price', $this->price);
      $stmt->bindParam(':specialPrice', $this->specialPrice);
      $stmt->bindParam(':discount', $this->discount);
      $stmt->bindParam(':description', $this->description);
      $stmt->bindParam(':manufacturer', $this->manufacturer);
      $stmt->bindParam(':status', $this->status);
      $stmt->bindParam(':screen', $this->screen);
      $stmt->bindParam(':sim', $this->sim);
      $stmt->bindParam(':memmory', $this->memmory);
      $stmt->bindParam(':ram', $this->ram);
      $stmt->bindParam(':bluetooth', $this->bluetooth);
      $stmt->bindParam(':wlan', $this->wlan);
      $stmt->bindParam(':gpu', $this->gpu);
      $stmt->bindParam(':pin', $this->pin);
      $stmt->bindParam(':camera', $this->camera);
      $stmt->bindParam(':os', $this->os);

      // Execute query
      if($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Edit Product

    public function update() {
      // Create query
      $query = 'UPDATE ' . 
          $this->table . '
        SET
          name = :name,
          categoryId = :categoryId,
          price = :price,
          specialPrice = :specialPrice,
          discount = :discount,
          description = :description,
          manufacturer = :manufacturer,
          status = :status,
          screen = :screen,
          sim = :sim,
          memmory = :memmory,
          ram = :ram,
          bluetooth = :bluetooth,
          wlan = :wlan,
          gpu = :gpu,
          pin = :pin,
          camera = :camera,
          os = :os

        WHERE
          id = :id';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->categoryId = htmlspecialchars(strip_tags($this->categoryId));
      $this->price = htmlspecialchars(strip_tags($this->price));
      $this->specialPrice = htmlspecialchars(strip_tags($this->specialPrice));
      $this->discount = htmlspecialchars(strip_tags($this->discount));
      $this->description = htmlspecialchars(strip_tags($this->description));
      $this->manufacturer = htmlspecialchars(strip_tags($this->manufacturer));
      $this->status = htmlspecialchars(strip_tags($this->status));
      $this->screen = htmlspecialchars(strip_tags($this->screen));
      $this->sim = htmlspecialchars(strip_tags($this->sim));
      $this->memmory = htmlspecialchars(strip_tags($this->memmory));
      $this->ram = htmlspecialchars(strip_tags($this->ram));
      $this->bluetooth = htmlspecialchars(strip_tags($this->bluetooth));
      $this->wlan = htmlspecialchars(strip_tags($this->wlan));
      $this->gpu = htmlspecialchars(strip_tags($this->gpu));
      $this->pin = htmlspecialchars(strip_tags($this->pin));
      $this->camera = htmlspecialchars(strip_tags($this->camera));
      $this->os = htmlspecialchars(strip_tags($this->os));


      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':categoryId', $this->categoryId);
      $stmt->bindParam(':price', $this->price);
      $stmt->bindParam(':specialPrice', $this->specialPrice);
      $stmt->bindParam(':discount', $this->discount);
      $stmt->bindParam(':description', $this->description);
      $stmt->bindParam(':manufacturer', $this->manufacturer);
      $stmt->bindParam(':status', $this->status);
      $stmt->bindParam(':screen', $this->screen);
      $stmt->bindParam(':sim', $this->sim);
      $stmt->bindParam(':memmory', $this->memmory);
      $stmt->bindParam(':ram', $this->ram);
      $stmt->bindParam(':bluetooth', $this->bluetooth);
      $stmt->bindParam(':wlan', $this->wlan);
      $stmt->bindParam(':gpu', $this->gpu);
      $stmt->bindParam(':pin', $this->pin);
      $stmt->bindParam(':camera', $this->camera);
      $stmt->bindParam(':os', $this->os);
      $stmt->bindParam(':id', $this->id);

      // Execute query
      if($stmt->execute()) {
        return true;
      }

      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    // Delete 
    public function delete() {
      // Create query
      $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->id = htmlspecialchars(strip_tags($this->id));

      // Bind data
      $stmt->bindParam(':id', $this->id);

      // Execute query
      if($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }


    public function readProductOfCategory() {
      // Create query
      $query = $query = 'SELECT 
        p.categoryId,
        p.name,
        p.price,
        p.specialPrice,
        p.discount,
        p.description,
        p.manufacturer,
        p.status,
        p.screen,
        p.sim,
        p.bluetooth,
        p.memmory,
        p.ram,
        p.wlan,
        p.gpu,
        p.pin,
        p.camera,
        p.os
      FROM
        ' . $this->table . ' p
      WHERE
        p.categoryId = ? ';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->categoryId);

      $stmt->execute();
      return $stmt;
    }

 
  }