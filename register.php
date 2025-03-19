<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Prepare user data
    $user = [
        'name' => $name,
        'email' => $email,
        'password' => $password
    ];

    // Insert user data into MongoDB
    $collection->insertOne($user);

    // Redirect to login page
    header('Location: login.html');
    exit();
}
?>

<!-- Register Form -->
<form method="POST" action="register.php" style="max-width: 300px; margin: auto; padding: 1em; border: 1px solid #ccc; border-radius: 1em;">
    <input type="text" name="name" placeholder="Name" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <input type="email" name="email" placeholder="Email" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <input type="password" name="password" placeholder="Password" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <button type="submit" style="width: 100%; padding: 0.7em; background-color: #4CAF50; color: white; border: none; border-radius: 0.3em;">Register</button>
</form>
