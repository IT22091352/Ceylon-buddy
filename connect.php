<?php
$host = 'localhost'; // Database host
$dbname = 'tourism_website'; // Database name
$username = 'root'; // Database username (default for local is usually root)
$password = ''; // Database password (leave empty for local development)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
