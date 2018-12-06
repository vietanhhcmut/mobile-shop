<?php
// 'user' object
class User{

  private $conn;
  private $table_name = "users";

  public $id;
  public $firstname;
  public $lastname;
  public $email;
  public $password;
  public $gender;
  public $birthday;
  public $isAdmin;

  public function __construct($db){
      $this->conn = $db;
  }

  function add(){
    if ($this->emailExists()) return -1;
    else {
        $query = "INSERT INTO " . $this->table_name . "
                SET
                    firstname = :firstname,
                    lastname = :lastname,
                    email = :email,
                    gender = :gender,
                    birthday = :birthday,
                    isAdmin = :isAdmin,
                    password = :password";
                    
        $stmt = $this->conn->prepare($query);

        $this->firstname=htmlspecialchars(strip_tags($this->firstname));
        $this->lastname=htmlspecialchars(strip_tags($this->lastname));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->password=htmlspecialchars(strip_tags($this->password));
        $this->gender=htmlspecialchars(strip_tags($this->gender));
        $this->birthday=htmlspecialchars(strip_tags($this->birthday));
        $this->isAdmin=htmlspecialchars(strip_tags($this->isAdmin));

        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':gender', $this->gender);
        $stmt->bindParam(':birthday', $this->birthday);
        $stmt->bindParam(':isAdmin', $this->isAdmin);

        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $password_hash);

        if ($stmt->execute()) {
            return 1;
        }
    
        return 0;
    }
  }

  // check if given email exist in the database
  function emailExists(){
  
    // query to check if email exists
    $query = "SELECT *
            FROM " . $this->table_name . "
            WHERE email = ?
            LIMIT 0,1";

    $stmt = $this->conn->prepare( $query );
    $this->email=htmlspecialchars(strip_tags($this->email));
    $stmt->bindParam(1, $this->email);
    $stmt->execute();
    $num = $stmt->rowCount();
    if($num>0){
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $this->id = $row['id'];
        $this->firstname = $row['firstname'];
        $this->lastname = $row['lastname'];
        $this->password = $row['password'];
        $this->isAdmin = $row['isAdmin'];
        $this->gender = $row['gender'];
        $this->birthday = $row['birthday'];
        return true;
    }
    return false;
  }

  public function update(){
    $query = "UPDATE " . $this->table_name . "
            SET
                firstname = :firstname,
                lastname = :lastname,
                gender = :gender,
                birthday = :birthday,
                email = :email,
                isAdmin = :isAdmin,
                password = :password    
            WHERE id = :id";

    $stmt = $this->conn->prepare($query);

    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->gender=htmlspecialchars(strip_tags($this->gender));
    $this->birthday=htmlspecialchars(strip_tags($this->birthday));
    $this->isAdmin=htmlspecialchars(strip_tags($this->isAdmin));

    $stmt->bindParam(':firstname', $this->firstname);
    $stmt->bindParam(':lastname', $this->lastname);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':gender', $this->gender);
    $stmt->bindParam(':birthday', $this->birthday);
    $stmt->bindParam(':isAdmin', $this->isAdmin);

    // hash the password before saving to database
    if(!empty($this->password)){
      $this->password=htmlspecialchars(strip_tags($this->password));
      $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
      $stmt->bindParam(':password', $password_hash);
    }
    $stmt->bindParam(':id', $this->id);

    if($stmt->execute()){
        return true;
    }
    return false;
  }

  // Delete 
  public function delete(){
    $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";
    $stmt = $this->conn->prepare($query);
    $this->id = htmlspecialchars(strip_tags($this->id));
    $stmt->bindParam(':id', $this->id);

    if($stmt->execute()){
        return true;
    }
    return false;
  }

}