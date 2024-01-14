<?php

include 'config.php';

if(isset($_POST['submit'])){

   $name = mysqli_real_escape_string($conn, $_POST['name']);
   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = mysqli_real_escape_string($conn, md5($_POST['password']));
   $cpass = mysqli_real_escape_string($conn, md5($_POST['cpassword']));
   $image = $_FILES['image']['name'];
   $image_size = $_FILES['image']['size'];
   $image_tmp_name = $_FILES['image']['tmp_name'];
   $image_folder = 'uploaded_img/'.$image;

   $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE email = '$email' AND password = '$pass'") or die('query failed');

   if(mysqli_num_rows($select) > 0){
      echo" <script>alert('User already exist ! Create New Account . . . .'); window.location.href='registration.html';</script>";
   }else{
      if($pass != $cpass){
       echo" <script>alert('confirm password not matched!'); window.location.href='registration.html';</script>";
      }elseif($image_size > 9000000){
          echo" <script>alert('Image size is too large!'); window.location.href='registration.html';</script>";
      }else{
         $insert = mysqli_query($conn, "INSERT INTO `user_form`(name, email, password, image) VALUES('$name', '$email', '$pass', '$image')") or die('query failed');

         if($insert){
            move_uploaded_file($image_tmp_name, $image_folder);
          echo" <script>alert('Registered Successfully!'); window.location.href='login.html';</script>";
            header('location:login.html');
         }else{
          echo" <script>alert('Registration Failed ! Check your Connection'); window.location.href='registration.html';</script>";
         
         }
      }
   }

}  

?>
