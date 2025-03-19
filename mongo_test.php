<?php
// filepath: c:\xampp\htdocs\Ceylon-buddy\mongo_test.php
require 'connect.php';

try {
    // List all collections in the database
    $collections = $client->tourism_website->listCollections();
    
    echo "Successfully connected to MongoDB!<br>";
    echo "Collections in tourism_website database:<br>";
    
    foreach ($collections as $collection) {
        echo "- " . $collection->getName() . "<br>";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>