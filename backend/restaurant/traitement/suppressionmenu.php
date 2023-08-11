<?php

if(!empty($_POST['IDM'])){
    $requete=$connexion->prepare("DELETE FROM menu WHERE IDM=?");
    $resultat=$requete->execute([$_POST['IDM']]);
    if($resultat>0){
        require 'listage.php';
    }

}