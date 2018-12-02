<?php
// 'user' object
class CartItem{
 
  // database connection and table name
  private $conn;
  private $table_name = "cartItem";

  // object properties
  public $id;
  public $productId;
  public $userId;
  public $quantity;
  public $color;

  // constructor
  public function __construct($db){
      $this->conn = $db;
  }

  // create new user record
  function add(){
  
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
                productId = :productId,
                userId = :userId,
                quantity = :quantity,
                color = :color";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    $this->userId=htmlspecialchars(strip_tags($this->userId));
    $this->productId=htmlspecialchars(strip_tags($this->productId));
    $this->quantity=htmlspecialchars(strip_tags($this->quantity));
    $this->color=htmlspecialchars(strip_tags($this->color));
    
    // bind the values
    $stmt->bindParam(':userId', $this->userId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':quantity', $this->quantity);
    $stmt->bindParam(':color', $this->color);

    // execute the query, also check if query was successful
    if($stmt->execute()){
        return true;
    }

    return false;
  }

  public function edit(){
    $query = "UPDATE " . $this->table_name . "
            SET
                userId = :userId,
                productId = :productId,
                quantity = :quantity,
                color = :color
            WHERE id = :id";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    $this->userId=htmlspecialchars(strip_tags($this->userId));
    $this->productId=htmlspecialchars(strip_tags($this->productId));
    $this->quantity=htmlspecialchars(strip_tags($this->quantity));
    $this->color=htmlspecialchars(strip_tags($this->color));
   
    $stmt->bindParam(':userId', $this->userId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':quantity', $this->quantity);
    $stmt->bindParam(':color', $this->color);

    // unique ID of record to be edited
    $stmt->bindParam(':id', $this->id);

    // execute the query
    if($stmt->execute()){
        return true;
    }

    return false;
  }

  // Delete 
  public function delete(){
    // Create query
    $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->id = htmlspecialchars(strip_tags($this->id));

    // Bind data
    $stmt->bindParam(':id', $this->id);

    // execute the query
    if($stmt->execute()){
        return true;
    }

    return false;
  }

  public function getCartOfUser(){
    $query = $query = 'SELECT 
        c.userId,
        c.productId,
        c.color,
        c.quantity
      FROM
        ' . $this->table_name . ' c
      WHERE
        c.userId = ? ';

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(1, $this->userId);

      $stmt->execute();
      return $stmt;
  }

}