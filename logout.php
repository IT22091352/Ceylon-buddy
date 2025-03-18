<?php
session_start();
session_destroy();
header("Location: index.html");
exit();
?>
<script>
    // Also clear client-side storage
    localStorage.removeItem('ceylonbuddyUser');
    window.location.href = 'index.html';
</script>