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
$location = isset($_POST['location']) ? $_POST['location'] : "";
$issue = isset($_POST['issue']) ? $_POST['issue'] : "";
$modelType = isset($_POST['modelType']) ? $_POST['modelType'] : "";
$name = isset($_POST['name']) ? $_POST['name'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";

// Prepare and execute the query 
$stmt = $conn->prepare("INSERT INTO on_road_service (location, issue , modelType, name,phone,email) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $location, $issue, $modelType, $name, $phone, $email);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "success";
} else {
    echo "Failed to transfer data: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
