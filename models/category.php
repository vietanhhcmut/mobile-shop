<?php 
  class Category {
    // DB stuff
    private $conn;
    private $table = 'categories';

    // Post Properties
    public $id;
    public $name;
    public $image;

    public function __construct($db) {
      $this->conn = $db;
    }

    // Get 
    public function read() {
      $query = 'SELECT 
            p.image,
            p.name
          FROM
            ' . $this->table . ' p';
         
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
          name = :name,
          image = :image';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->image = htmlspecialchars(strip_tags($this->image));
      
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':image', $this->image);

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
          image = :image

        WHERE
          id = :id';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      $this->name = htmlspecialchars(strip_tags($this->name));
      $this->image = htmlspecialchars(strip_tags($this->image));


      // Bind data
      $stmt->bindParam(':id', $this->id);
      $stmt->bindParam(':name', $this->name);
      $stmt->bindParam(':image', $this->image);

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

    // Get Single 
    public function read_single() {
      // Create query
      $query = 'SELECT 
      c.name,
      c.image
     FROM
       ' . $this->table . ' c
     WHERE
       c.id = ?
     LIMIT 0,1';

     $stmt = $this->conn->prepare($query);
     
     $stmt->bindParam(1, $this->id);

     // Execute query
     $stmt->execute();

     $row = $stmt->fetch(PDO::FETCH_ASSOC);

     // Set properties
     $this->name = $row['name'];
     $this->image = $row['image'];
   }
 
  }