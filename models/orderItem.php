<?php
// 'user' object
class OrderItem {
 
  // database connection and table name
  private $conn;
  private $table_name = "order_items";

  // object properties
  public $id;
  public $productId;
  public $orderId;
  public $quantity;
  public $color;

  // constructor
  public function __construct($db){
      $this->conn = $db;
  }

  public function getUserCart(){
    $query = 'SELECT * FROM ' . $this->table_name . ' WHERE orderId=? ';

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(1, $this->orderId);
    $stmt->execute();
    
    $cartItems = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      array_push($cartItems, $row);
    }
    return $cartItems;
  }

  public function add() {
    $query = "INSERT INTO " . $this->table_name . "
      SET
          productId = :productId,
          orderId = :orderId,
          quantity = :quantity,
          color = :color";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    $this->orderId=htmlspecialchars(strip_tags($this->orderId));
    $this->productId=htmlspecialchars(strip_tags($this->productId));
    $this->quantity=htmlspecialchars(strip_tags($this->quantity));
    $this->color=htmlspecialchars(strip_tags($this->color));

    // bind the values
    $stmt->bindParam(':orderId', $this->orderId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':quantity', $this->quantity);
    $stmt->bindParam(':color', $this->color);

    if ($stmt->execute()) return true;
    return false;
  }

  public function update(){
    $query = "UPDATE " . $this->table_name . "
        SET quantity = :quantity
        WHERE
            productId = :productId AND
            orderId = :orderId AND
            color = :color";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    $this->orderId=htmlspecialchars(strip_tags($this->orderId));
    $this->productId=htmlspecialchars(strip_tags($this->productId));
    $this->quantity=htmlspecialchars(strip_tags($this->quantity));
    $this->color=htmlspecialchars(strip_tags($this->color));

    // bind the values
    $stmt->bindParam(':orderId', $this->orderId);
    $stmt->bindParam(':productId', $this->productId);
    $stmt->bindParam(':quantity', $this->quantity);
    $stmt->bindParam(':color', $this->color);

    if ($stmt->execute()) return true;
    return false;
  }

  // Delete 
  public function delete(){
    // Create query
    $query = "DELETE FROM " . $this->table_name . " WHERE orderId=?";

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Bind data
    $stmt->bindParam(1, $this->orderId);

    // execute the query
    if ($stmt->execute()) return true;
    return false;
  }


}