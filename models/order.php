<?php 
  class Order {
    // DB stuff
    private $conn;
    private $table = 'orders';

    public $id;
    public $feeShip;
    public $totalPrice;
    public $city;
    public $district;
    public $ward;
    public $address;
    public $phonenumber;
    public $type;

    public function __construct($db) {
      $this->conn = $db;
    }

    // Get 
    public function read() {
      $query = 'SELECT * FROM ' . $this->table;
         
      $stmt = $this->conn->prepare($query);
      $stmt->execute();

      return $stmt;
    }

    // Add 
    public function add() {
      // Create query
      $query = 'INSERT INTO ' . 
          $this->table . '
        SET
        feeShip = :feeShip,
        totalPrice = :totalPrice,
        city = :city,
        district = :district,
        ward = :ward,
        address = :address,
        phonenumber = :phonenumber,
        type = :type';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->feeShip = htmlspecialchars(strip_tags($this->feeShip));
      $this->totalPrice = htmlspecialchars(strip_tags($this->totalPrice));
      $this->city = htmlspecialchars(strip_tags($this->city));
      $this->district = htmlspecialchars(strip_tags($this->district));
      $this->ward = htmlspecialchars(strip_tags($this->ward));
      $this->address = htmlspecialchars(strip_tags($this->address));
      $this->phonenumber = htmlspecialchars(strip_tags($this->phonenumber));
      $this->type = htmlspecialchars(strip_tags($this->type));

      
      // Bind data
      $stmt->bindParam(':feeShip', $this->feeShip);
      $stmt->bindParam(':totalPrice', $this->totalPrice);
      $stmt->bindParam(':city', $this->city);
      $stmt->bindParam(':district', $this->district);
      $stmt->bindParam(':ward', $this->ward);
      $stmt->bindParam(':address', $this->address);
      $stmt->bindParam(':phonenumber', $this->phonenumber);
      $stmt->bindParam(':type', $this->type);

      // Execute query
      if($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

  
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
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

  }