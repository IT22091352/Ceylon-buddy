<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values from the form
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    // Validate form data to ensure none of the fields are empty
    if ($username && $email && $password) {
        // Hash the password for security
        $password = password_hash($password, PASSWORD_DEFAULT);

        // Prepare SQL query to insert user data into the database
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);

        // Execute the query
        if ($stmt->execute([$username, $email, $password])) {
            echo "Registration successful! You can now <a href='login.php'>login</a>.";
        } else {
            echo "An error occurred during registration.";
        }
    } else {
        echo "Please fill in all the fields.";
    }
}
?>

<!-- Register Form -->
<form method="POST" action="register.php" style="max-width: 300px; margin: auto; padding: 1em; border: 1px solid #ccc; border-radius: 1em;">
    <input type="text" name="username" placeholder="Username" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <input type="email" name="email" placeholder="Email" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <input type="password" name="password" placeholder="Password" required style="width: 100%; padding: 0.5em; margin: 0.5em 0;"><br>
    <button type="submit" style="width: 100%; padding: 0.7em; background-color: #4CAF50; color: white; border: none; border-radius: 0.3em;">Register</button>
</form>
