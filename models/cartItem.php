<?php
// 'user' object
class CartItem{
 
  // database connection and table name
  private $conn;
  private $table_name = "cartitem";

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

  public function getUserCart(){
    $query = 'SELECT * FROM ' . $this->table_name . ' WHERE userId=? ';

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(1, $this->userId);
    $stmt->execute();
    
    $cartItems = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($cartItems, $row);
    }
    return $cartItems;
  }

  public function add() {
    $query = 'SELECT * FROM ' . $this->table_name . ' 
      WHERE userId=:userId AND productId=:productId AND color=:color';

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':userId', $this->userId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':color', $this->color);

    $stmt->execute();

    if ($stmt->rowCount() == 0) {
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

      if ($stmt->execute()) return true;
      return false;
    }
    else {
      $query = "UPDATE " . $this->table_name . "
        SET quantity = quantity + :quantity
        WHERE
            productId = :productId AND
            userId = :userId AND
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

      if ($stmt->execute()) return true;
      return false;
    }
  }

  public function update(){
    $query = "UPDATE " . $this->table_name . "
        SET quantity = :quantity
        WHERE
            productId = :productId AND
            userId = :userId AND
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

    if ($stmt->execute()) return true;
    return false;
  }

  // Delete 
  public function delete(){
    // Create query
    $query = "DELETE FROM " . $this->table_name . " WHERE userId=:userId AND productId=:productId AND color=:color";

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->userId = htmlspecialchars(strip_tags($this->userId));
    $this->productId = htmlspecialchars(strip_tags($this->productId));
    $this->color = htmlspecialchars(strip_tags($this->color));

    // Bind data
    $stmt->bindParam(':userId', $this->userId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':color', $this->color);

    // execute the query
    if ($stmt->execute()) return true;
    return false;
  }


}