<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

$mongoUrl = "mongodb+srv://cylonBuddy:aLcHxtZECvya9Vr9@cluster0.uaa4e5k.mongodb.net/"; // Replace with your MongoDB URL
$client = new MongoDB\Client($mongoUrl);
$collection = $client->tourism_website->users;
?>


