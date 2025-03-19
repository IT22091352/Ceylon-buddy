
<?php
session_start();

// Check if user is logged in
function isAuthenticated() {
    return isset($_SESSION['user_id']);
}

// Redirect to login page if not authenticated
if (!isAuthenticated()) {
    // Get the current requested URL
    $current_url = $_SERVER['REQUEST_URI'];
    
    // Skip redirection for these allowed pages
    $allowed_pages = array(
        '/index.html',
        '/login.html',
        '/register.html'
    );
    
    // Check if the current URL is allowed
    $redirect = true;
    foreach ($allowed_pages as $page) {
        if (strpos($current_url, $page) !== false) {
            $redirect = false;
            break;
        }
    }
    
    if ($redirect) {
        header("Location: index.html");
        exit();
    }
}
?>