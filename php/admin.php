<?php

session_start();
$conn = mysqli_connect("localhost", "root", "", "modularfurniture");

if (isset($_POST["submit"])) {
    $Email = $_POST["email"];
    $password = $_POST["password"];

        if ($$Email == "Admin205@gmail.com" || $password == "123456") {
            // Use prepared statements to prevent SQL injection
            $query = "INSERT INTO admin_penal (user_id, `password`) VALUES (?, ?)";
            $stmt = mysqli_prepare($conn, $query);
            mysqli_stmt_bind_param($stmt, "ss", $Email, $password);

            if (mysqli_stmt_execute($stmt)) {
                echo "<script>alert('Welcome in Admin penal. Your Record is Save successfully' ); window.location.href = 'Admin.html'</script>";
            } else {
                echo "<script>alert('Connection Failed . . .'); window.location.href = 'index.html';</script>";
            }

            mysqli_stmt_close($stmt);
        } else {
            echo "<script>alert('Wrong email and Password !!'); window.location.href = 'index.html'</script>";
        }
    }

?>