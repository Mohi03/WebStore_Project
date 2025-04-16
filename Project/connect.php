<?php
session_start();
require_once 'db_config.php'; 

// Get and sanitize form inputs
$email = trim($_POST['email']);
$password = $_POST['password'];

// Basic validation
if (empty($email) || empty($password)) {
    die("Email and password are required.");
}

// Fetch user from DB
$stmt = $pdo->prepare("SELECT id, full_name, email, password_hash FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user && $password === $user['password_hash']) {
    // Success
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['fullname'] = $user['fullname'];
    $_SESSION['email'] = $user['email'];
    header("Location: index2.html");
    exit();
} else {
    die("Invalid email or password.");
}
?>
