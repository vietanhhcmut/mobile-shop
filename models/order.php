<?php 
  class Order {
    // DB stuff
    private $conn;
    private $table = 'orders';

    public $id;
    public $totalPrice;
    public $city;
    public $district;
    public $wards;
    public $street;
    public $phonenumber;
    public $name;
    public $gender;
    public $email;

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
      $query = 'INSERT INTO ' . $this->table . '
        SET
          totalPrice = :totalPrice,
          city = :city,
          district = :district,
          wards = :wards,
          street = :street,
          phonenumber = :phonenumber,
          name = :name,
          gender = :gender,
          email = :email';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->totalPrice = htmlspecialchars(strip_tags($this->totalPrice));
      $this->city = htmlspecialchars(strip_tags($this->city));
      $this->district = htmlspecialchars(strip_tags($this->district));
      $this->wards = htmlspecialchars(strip_tags($this->wards));
      $this->street = htmlspecialchars(strip_tags($this->street));
      $this->phonenumber = htmlspecialchars(strip_tags($this->phonenumber));
      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->gender = htmlspecialchars(strip_tags($this->gender));
      $this->email = htmlspecialchars(strip_tags($this->email));
      
      // Bind data
      $stmt->bindParam(':totalPrice', $this->totalPrice);
      $stmt->bindParam(':city', $this->city);
      $stmt->bindParam(':district', $this->district);
      $stmt->bindParam(':wards', $this->wards);
      $stmt->bindParam(':street', $this->street);
      $stmt->bindParam(':phonenumber', $this->phonenumber);
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':gender', $this->gender);
      $stmt->bindParam(':email', $this->email);

      // Execute query
      if ($stmt->execute()) {
        return $this->conn->lastInsertId();
      }
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