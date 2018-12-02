<?php 
  class Product {
    // DB stuff
    private $conn;
    private $table = 'products';

    // Post Properties
    public $id;
    public $createdAt;
    public $categoryId;
    public $name;
    public $price;
    public $saleoff;
    public $description;
    public $screen;
    public $sim;
    public $memory;
    public $ram;
    public $bluetooth;
    public $wlan;
    public $gps;
    public $pin;
    public $camera;
    public $os;

    public $cart;

    public function __construct($db) {
      $this->conn = $db;
    }

    // Get product
    public function readOneProduct() {
      $query = 'SELECT * FROM ' . $this->table . ' WHERE id=?';
         
      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->id);
      $stmt->execute();

      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      $query = 'SELECT color, name FROM colors, product_color WHERE (product_color.productId = ? AND colors.id=product_color.colorId)';
      $stmt1 = $this->conn->prepare($query);
      $stmt1->bindParam(1, $row['id']);
      $stmt1->execute();
        
      $row['colors'] = array();
      while ($row1 = $stmt1->fetch(PDO::FETCH_ASSOC)) {
        array_push($row['colors'], $row1);
      }

      $query = 'SELECT path FROM images WHERE images.productId = ?';
      $stmt2 = $this->conn->prepare($query);
      $stmt2->bindParam(1, $row['id']);
      $stmt2->execute();
        
      $row['imgs'] = array();
      while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
        array_push($row['imgs'], $row2['path']);
      }

      $query = 'SELECT name FROM categories WHERE id = ?';
      $stmt3 = $this->conn->prepare($query);
      $stmt3->bindParam(1, $row['categoryId']);
      $stmt3->execute();

      $row3 = $stmt3->fetch(PDO::FETCH_ASSOC);

      $row['category'] = $row3['name'];

      return $row;
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
          saleoff = :saleoff,
          description = :description,
          screen = :screen,
          sim = :sim,
          memory = :memory,
          ram = :ram,
          bluetooth = :bluetooth,
          wlan = :wlan,
          gps = :gps,
          pin = :pin,
          camera = :camera,
          os = :os';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->categoryId = htmlspecialchars(strip_tags($this->categoryId));
      $this->price = htmlspecialchars(strip_tags($this->price));
      $this->saleoff = htmlspecialchars(strip_tags($this->saleoff));
      $this->description = htmlspecialchars(strip_tags($this->description));
      $this->screen = htmlspecialchars(strip_tags($this->screen));
      $this->sim = htmlspecialchars(strip_tags($this->sim));
      $this->memory = htmlspecialchars(strip_tags($this->memory));
      $this->ram = htmlspecialchars(strip_tags($this->ram));
      $this->bluetooth = htmlspecialchars(strip_tags($this->bluetooth));
      $this->wlan = htmlspecialchars(strip_tags($this->wlan));
      $this->gps = htmlspecialchars(strip_tags($this->gps));
      $this->pin = htmlspecialchars(strip_tags($this->pin));
      $this->camera = htmlspecialchars(strip_tags($this->camera));
      $this->os = htmlspecialchars(strip_tags($this->os));
      
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':categoryId', $this->categoryId);
      $stmt->bindParam(':price', $this->price);
      $stmt->bindParam(':saleoff', $this->saleoff);
      $stmt->bindParam(':description', $this->description);
      $stmt->bindParam(':screen', $this->screen);
      $stmt->bindParam(':sim', $this->sim);
      $stmt->bindParam(':memory', $this->memory);
      $stmt->bindParam(':ram', $this->ram);
      $stmt->bindParam(':bluetooth', $this->bluetooth);
      $stmt->bindParam(':wlan', $this->wlan);
      $stmt->bindParam(':gps', $this->gps);
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
          saleoff = :saleoff,
          description = :description,
          screen = :screen,
          sim = :sim,
          memory = :memory,
          ram = :ram,
          bluetooth = :bluetooth,
          wlan = :wlan,
          gps = :gps,
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
      $this->saleoff = htmlspecialchars(strip_tags($this->saleoff));
      $this->description = htmlspecialchars(strip_tags($this->description));
      $this->screen = htmlspecialchars(strip_tags($this->screen));
      $this->sim = htmlspecialchars(strip_tags($this->sim));
      $this->memory = htmlspecialchars(strip_tags($this->memory));
      $this->ram = htmlspecialchars(strip_tags($this->ram));
      $this->bluetooth = htmlspecialchars(strip_tags($this->bluetooth));
      $this->wlan = htmlspecialchars(strip_tags($this->wlan));
      $this->gps = htmlspecialchars(strip_tags($this->gps));
      $this->pin = htmlspecialchars(strip_tags($this->pin));
      $this->camera = htmlspecialchars(strip_tags($this->camera));
      $this->os = htmlspecialchars(strip_tags($this->os));


      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':categoryId', $this->categoryId);
      $stmt->bindParam(':price', $this->price);
      $stmt->bindParam(':saleoff', $this->saleoff);
      $stmt->bindParam(':description', $this->description);
      $stmt->bindParam(':screen', $this->screen);
      $stmt->bindParam(':sim', $this->sim);
      $stmt->bindParam(':memory', $this->memory);
      $stmt->bindParam(':ram', $this->ram);
      $stmt->bindParam(':bluetooth', $this->bluetooth);
      $stmt->bindParam(':wlan', $this->wlan);
      $stmt->bindParam(':gps', $this->gps);
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
      $query = 'SELECT * FROM ' . $this->table . ' p, colors, images 
        WHERE (p.categoryId = ? AND p.id=colors.productId AND p.id=images.productId) 
        ORDER BY createdAt LIMIT 10';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->categoryId);

      $stmt->execute();
      return $stmt;
    }

    public function readTopProduct() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table . ' ORDER BY createdAt LIMIT 10';

      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      $products_arr = array();

      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $query = 'SELECT color, name FROM colors, product_color WHERE (product_color.productId = ? AND colors.id=product_color.colorId)';
        $stmt1 = $this->conn->prepare($query);
        $stmt1->bindParam(1, $row['id']);
        $stmt1->execute();
          
        $row['colors'] = array();
        while ($row1 = $stmt1->fetch(PDO::FETCH_ASSOC)) {
          array_push($row['colors'], $row1);
        }

        $query = 'SELECT path FROM images WHERE images.productId = ?';
        $stmt2 = $this->conn->prepare($query);
        $stmt2->bindParam(1, $row['id']);
        $stmt2->execute();
          
        $row['imgs'] = array();
        while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
          array_push($row['imgs'], $row2['path']);
        }

        $query = 'SELECT name FROM categories WHERE id = ?';
        $stmt3 = $this->conn->prepare($query);
        $stmt3->bindParam(1, $row['categoryId']);
        $stmt3->execute();

        $row3 = $stmt3->fetch(PDO::FETCH_ASSOC);

        $row['category'] = $row3['name'];


        array_push($products_arr, $row);
      }

      return $products_arr;
    }

    public function readTopProductOfCategory() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table . ' WHERE categoryId= ? ORDER BY createdAt LIMIT 10';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->categoryId);
      $stmt->execute();

      $products_arr = array();

      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $query = 'SELECT color, name FROM colors, product_color WHERE (product_color.productId = ? AND colors.id=product_color.colorId)';
        $stmt1 = $this->conn->prepare($query);
        $stmt1->bindParam(1, $row['id']);
        $stmt1->execute();
          
        $row['colors'] = array();
        while ($row1 = $stmt1->fetch(PDO::FETCH_ASSOC)) {
          array_push($row['colors'], $row1);
        }

        $query = 'SELECT path FROM images WHERE images.productId = ?';
        $stmt2 = $this->conn->prepare($query);
        $stmt2->bindParam(1, $row['id']);
        $stmt2->execute();
          
        $row['imgs'] = array();
        while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
          array_push($row['imgs'], $row2['path']);
        }

        $query = 'SELECT name FROM categories WHERE id = ?';
        $stmt3 = $this->conn->prepare($query);
        $stmt3->bindParam(1, $row['categoryId']);
        $stmt3->execute();

        $row3 = $stmt3->fetch(PDO::FETCH_ASSOC);

        $row['category'] = $row3['name'];
        array_push($products_arr, $row);
      }

      return $products_arr;
    }


    public function calcTotalPrice() {
      $totalPrice = 0;
      $cart = $this->cart;
      for ($i = 0; $i < sizeof($this->cart); $i++) {
        $query = 'SELECT * FROM ' . $this->table . ' WHERE id=?';
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $cart[$i]->productId);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $totalPrice += $row['price']*(100-$row['saleoff'])/100 * $cart[$i]->quantity;
      }
      return $totalPrice;
    }
  }