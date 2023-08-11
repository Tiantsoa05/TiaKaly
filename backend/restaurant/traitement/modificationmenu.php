<?php

if(!empty($_GET['IDM'])&&!empty($_GET['Nommenu']) && !empty($_GET['prix'])){
    $Nommenu=$_GET['Nommenu'];
    $prix=$_GET['prix'];
    
    $requete=$connexion->prepare("UPDATE menu SET Nommenu=?,prix=?, WHERE IDM=?");
    $resultat=$requete->execute([$Nommenu,$prix,$_GET['IDM']]);
    if($resultat>0){
        require 'listage.php';
    }
}