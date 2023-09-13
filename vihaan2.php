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
$name = isset($_POST['name']) ? $_POST['name'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$date = isset($_POST['date']) ? $_POST['date'] : "";
$time = isset($_POST['time']) ? $_POST['time'] : "";

// Prepare and execute the query 
$stmt = $conn->prepare("INSERT INTO testride (location, name, email, phone, date, time) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $location, $name, $email, $phone, $date, $time);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "success";
} else {
    echo "Failed to transfer data: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
