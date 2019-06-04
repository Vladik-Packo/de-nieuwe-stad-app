<?php
session_start();
$mysqli = new mysqli('localhost', 'root', 'Yourihot2206' , 'dns')
if(isset($_POST['login'])){
	$email = trim($_POST['email']);
	$pass = trim($_POST['password']);
	$password = $pass;
	$hashil 
}