<?php
require_once 'db_config.php'; // Replaces manual PDO setup

// Get and sanitize input
$fullname = trim($_POST['fullname']);
$email = trim($_POST['email']);
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Validate input
if (empty($fullname) || empty($email) || empty($password) || empty($confirm_password)) {
    die("All fields are required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
}

if ($password !== $confirm_password) {
    die("Passwords do not match.");
}


// Check if user already exists
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);

if ($stmt->fetch()) {
    die("Email is already registered.");
}

// Insert user
$stmt = $pdo->prepare("INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)");

try {
    $stmt->execute([$fullname, $email, $password]);
    echo "Registration successful! <a href='login.php'>Login here</a>";
} catch (Exception $e) {
    die("Registration failed: " . $e->getMessage());
}
?>
