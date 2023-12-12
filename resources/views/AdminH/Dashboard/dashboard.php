<?php
session_start();

// Check if user is logged in, if not, redirect to login page
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: Log In/index.html');
    exit();
}

// Display dashboard content here
echo 'Welcome, ' . $_SESSION['username'] . '! This is the dashboard.';
?>
