<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

$mongoUrl = "mongodb+srv://CeylonBunddyAdmin:w3JhohdJKGLhraKZ@ceylon-buddy.yslsv.mongodb.net/"; // Replace with your MongoDB URL
$client = new MongoDB\Client($mongoUrl);
$collection = $client->tourism_website->users;
?>


