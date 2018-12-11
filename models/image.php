<?php 
  class Image {
    // DB stuff
    private $conn;
    private $table = 'images';

    // Post Properties
    public $id;
    public $path;
    public $productId;

    public function __construct($db) {
      $this->conn = $db;
    }

    // Add 
    public function add() {
      // Create query
      $query = 'INSERT INTO ' . 
          $this->table . '
        SET
          path = :path,
          productId = :productId';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->path = htmlspecialchars(strip_tags($this->path));
      $this->productId = htmlspecialchars(strip_tags($this->productId));
      
      $stmt->bindParam(':path', $this->path);
      $stmt->bindParam(':productId', $this->productId);

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
      $query = 'DELETE FROM ' . $this->table . ' WHERE productId = :productId';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->id = htmlspecialchars(strip_tags($this->id));

      // Bind data
      $stmt->bindParam(':productId', $this->productId);

      // Execute query
      if($stmt->execute()) {
        return true;
      }
      printf("Error: %s.\n", $stmt->error);

      return false;
    }
  }