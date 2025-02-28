<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'job_application_db'; // Use the correct database name

    $con = mysqli_connect($host, $user, $password, $database);

    if (!$con){
        die("Connection failed: " . mysqli_connect_error());
    }
?>
