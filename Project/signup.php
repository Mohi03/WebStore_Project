<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - WebStore</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"> <style>
        /* Additional styles specific to auth pages if needed */
        body {
            background-color: #f7fafc; /* Ensure consistent background */
        }
    </style>
</head>
<body class="flex flex-col min-h-screen">

    <header class="bg-white shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-gray-800">WebStore</a>
             <div>
                <a href="index.html" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Back to Store</a>
            </div>
        </nav>
    </header>

    <main class="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 bg-white p-10 shadow-lg rounded-lg">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="connect2.php" method="POST"> <div class="rounded-md shadow-sm space-y-4">
                     <div>
                        <label for="full-name" class="sr-only">Full name</label>
                        <input id="full-name" name="fullname" type="text" autocomplete="name" required
                               class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               placeholder="Full name">
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required
                               class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               placeholder="Email address">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="new-password" required
                               class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               placeholder="Password">
                    </div>
                     <div>
                        <label for="confirm-password" class="sr-only">Confirm Password</label>
                        <input id="confirm-password" name="confirm_password" type="password" autocomplete="new-password" required
                               class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               placeholder="Confirm Password">
                    </div>
                </div>

                <div>
                    <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign up
                    </button>
                </div>
            </form>

            <div class="text-sm text-center">
                 <p class="text-gray-600">
                    Already have an account?
                    <a href="login.php" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Log In
                    </a>
                 </p>
            </div>
        </div>
    </main>

     <footer class="bg-gray-800 text-gray-400 py-4 mt-auto">
        <div class="container mx-auto px-6 text-center text-sm">
            &copy; 2025 My Enhanced Web Store. All rights reserved.
        </div>
    </footer>

</body>
</html>