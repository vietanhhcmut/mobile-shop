<?php 
  class Review {
    // DB stuff
    private $conn;
    private $table = 'reviews';

    // Post Properties
    public $id;
    public $productId;
    public $name;
    public $email;
    public $content;
    public $createAt;

    public function __construct($db) {
      $this->conn = $db;
    }

    public function getReviewOfProduct() {
      // Create query
      $query = 'SELECT 
        r.productId,
        r.name,
        r.email,
        r.content,
        r.createAt
      FROM
        ' . $this->table . ' r
      WHERE
        r.productId = ? ';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->productId);

      $stmt->execute();
      return $stmt;
    }

     // Add 
     public function create() {
      // Create query
      $query = 'INSERT INTO ' . 
          $this->table . '
        SET
          name = :name,
          email = :email,
          productId = :productId,
          content = :content';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->email = htmlspecialchars(strip_tags($this->email));
      $this->content = htmlspecialchars(strip_tags($this->content));
      $this->productId = htmlspecialchars(strip_tags($this->productId));
      
      // Bind data
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':email', $this->email);
      $stmt->bindParam(':content', $this->content);
      $stmt->bindParam(':productId', $this->productId);
  
      // Execute query
      if($stmt->execute()) {
        return true;
      }

      // Print error if something goes wrong
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
      printf("Error: %s.\n", $stmt->error);

      return false;
    }


  }