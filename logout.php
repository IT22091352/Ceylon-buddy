<?php
session_start();
session_destroy();
header("Location: index.html");
exit();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Logging Out...</title>
    <script>
        // Clear client-side storage
        localStorage.removeItem('ceylonbuddyUser');
        
        // Redirect to index page after a brief delay
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 100);
    </script>
</head>
<body>
    <p>Logging you out...</p>
</body>
</html>