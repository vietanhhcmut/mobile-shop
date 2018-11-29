<?php
// 'user' object
class Product{
 
  // database connection and table name
  private $conn;
  private $table_name = "products";

  // object properties
  public $id;
  public $firstname;
  public $lastname;
  public $email;
  public $password;
  public $gender;
  public $birthday;

  // constructor
  public function __construct($db){
      $this->conn = $db;
  }

  // create new user record
  function create(){
  
    // insert query
    $query = "INSERT INTO " . $this->table_name . "
            SET
                firstname = :firstname,
                lastname = :lastname,
                email = :email,
                gender = :gender,
                birthday = :birthday,
                password = :password";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->password=htmlspecialchars(strip_tags($this->password));
    $this->gender=htmlspecialchars(strip_tags($this->gender));
    $this->birthday=htmlspecialchars(strip_tags($this->birthday));

    // bind the values
    $stmt->bindParam(':firstname', $this->firstname);
    $stmt->bindParam(':lastname', $this->lastname);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':gender', $this->gender);
    $stmt->bindParam(':birthday', $this->birthday);

    // hash the password before saving to database
    $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password_hash);

    // execute the query, also check if query was successful
    if($stmt->execute()){
        return true;
    }

    return false;
  }

  // check if given email exist in the database
  function get(){
  
    $query = 'SELECT * FROM ' . $this->table . '
                                LEFT JOIN
                                  categories c ON p.category_id = c.id
                                ORDER BY
                                  p.created_at DESC';
      
    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;


  }

  // update a user record
  public function update(){
  
    // if password needs to be updated
    $password_set=!empty($this->password) ? ", password = :password" : "";

    // if no posted password, do not update the password
    $query = "UPDATE " . $this->table_name . "
            SET
                firstname = :firstname,
                lastname = :lastname,
                gender = :gender,
                birthday = :birthday,
                email = :email
                {$password_set}
            WHERE id = :id";

    // prepare the query
    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->gender=htmlspecialchars(strip_tags($this->gender));
    $this->birthday=htmlspecialchars(strip_tags($this->birthday));

    // bind the values from the form
    $stmt->bindParam(':firstname', $this->firstname);
    $stmt->bindParam(':lastname', $this->lastname);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':gender', $this->gender);
    $stmt->bindParam(':birthday', $this->birthday);

    // hash the password before saving to database
    if(!empty($this->password)){
      $this->password=htmlspecialchars(strip_tags($this->password));
      $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
      $stmt->bindParam(':password', $password_hash);
    }

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

}