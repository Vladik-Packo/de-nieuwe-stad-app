<?php
session_start();
$mysqli = new mysqli('localhost', 'root', 'Yourihot2206' , 'dns')
if(isset($_POST['login'])){
	$email = trim($_POST['email']);
	$pass = trim($_POST['password']);
	$password = $pass;
	$hashil = $mysqli->prepare("SELECT * FROM users WHERE email=?");
	$hashil->bind_param("d", $email);
	$hashil->execute();
	$hashil->bind_result($id, $user, $myemail, $mypass);
	$hashil ->fetch();
	if($mypass == $password){
		echo "ok";
		$_SESSION['id'] = $id;
		$_SESSION['user']= $user;

	}
	else {
		echo "email of wachtwoord klopt niet";
	}
}