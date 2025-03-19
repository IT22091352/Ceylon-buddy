<?php
session_start();
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user data from MongoDB
    $user = $collection->findOne(['email' => $email]);

    // Check if the email exists and password matches
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = (string) $user['_id']; // Store user ID in session
        $_SESSION['user_name'] = $user['name']; // Store user name in session
        header('Location: home.html'); // Redirect to home page
        exit();
    } else {
        echo "Invalid email or password.";
    }
}
?>

<form method="POST" action="login.php" style="max-width: 300px; margin: auto; padding: 1em; border: 1px solid #ccc; border-radius: 1em;">
    <input type="email" name="email" placeholder="Email" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <input type="password" name="password" placeholder="Password" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <button type="submit" style="width: 100%; padding: 0.7em; background-color: #4CAF50; color: white; border: none; border-radius: 0.3em;">Login</button>
</form>
