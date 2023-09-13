<?php
// Connect to MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vihaan_first_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$serviceType = isset($_POST['serviceType']) ? $_POST['serviceType'] : "";
$name = isset($_POST['name']) ? $_POST['name'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$modelType = isset($_POST['modelType']) ? $_POST['modelType'] : "";
$comments = isset($_POST['comments']) ? $_POST['comments'] : "";

// Prepare and execute the query 
$stmt = $conn->prepare("INSERT INTO general_services (serviceType,name,phone,email,modelType,comments) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $serviceType, $name, $phone, $email, $modelType, $comments);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "success";
} else {
    echo "Failed to transfer data: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
