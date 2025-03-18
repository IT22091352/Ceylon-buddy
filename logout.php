<?php
session_start();
session_destroy();
// Use absolute URL path and ensure no output before redirect
header("Location: /Ceylon-buddy/index.html");
exit();
?>