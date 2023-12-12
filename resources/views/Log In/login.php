<?php
session_start();

// Check if form is submitted
if (isset($_POST['submit'])) {
    // Get username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // In a real system, you'd compare against a database
    // For example, checking against hardcoded values for demonstration purposes
    $valid_username = 'user'; // Replace with your actual username
    $valid_password = 'password'; // Replace with your actual password

    // Check if username and password match
    if ($username === $valid_username && $password === $valid_password) {
        // Set session variables to mark user as logged in
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;

        // Redirect to dashboard or another page on successful login
        header('Location: AdminH/index.html');
        exit();
    } else {
        echo 'Invalid username or password';
    }
}
?>
