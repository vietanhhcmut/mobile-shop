<?php
include_once '../../config/core.php';
include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
include_once '../../libs/php-jwt-master/src/ExpiredException.php';
include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
include_once '../../libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;
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

  public $token;
  // constructor
  public function __construct($db){
      $this->conn = $db;
  }

  // create new user record
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

  public function getUserCart(){
    $query = 'SELECT * FROM ' . $this->table_name . ' WHERE userId=? ';

    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(1, $this->userId);
    $stmt->execute();
    
    $cartItem = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $cartItem.push($row);
    }
    return $cartItem;
  }

  public function add() {
    $query = 'SELETE * FROM ' . $this->table_name . ' 
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

}