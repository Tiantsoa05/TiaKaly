<?php 
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET,POST');

    header('Access-Control-Allow-Headers: content-type');

    header('content-Type: application/json');

    $connexion=new PDO("mysql:dbname=restaurant","root","admin");
    require 'functions.php';
    
    if($_GET["type"]){
       $page=$_GET ['type'];
        if(is_file("traitement/".$page.".php")){
            require "traitement/".$page.".php";
        }else{
            require "traitement/404.php";
        }
    }