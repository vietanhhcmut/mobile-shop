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
    public $createdAt;

    public function __construct($db) {
      $this->conn = $db;
    }

    public function getOne() {
      $query = 'SELECT * FROM ' . $this->table . ' WHERE id = LAST_INSERT_ID()';

      $stmt = $this->conn->prepare($query);

      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      return $row;
    }

    public function getProductReviews() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table . ' WHERE productId = ? ';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->productId);

      $stmt->execute();

      $reviews = array();
      while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($reviews, $row);
      }
      return $reviews;
    }

     // Add 
     public function add() {
      // Create query
      $query = 'INSERT INTO ' . $this->table . '
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
      if ($stmt->execute()) {
        $newReview = $this->getOne();
        return $newReview;
      }
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