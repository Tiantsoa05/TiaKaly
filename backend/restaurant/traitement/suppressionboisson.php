<?php

if(!empty($_POST['id'])){
    $requete=$connexion->prepare("DELETE FROM boisson WHERE id=?");
    $resultat=$requete->execute([$_POST['id']]);
    if($resultat>0){
        require 'listageboisson.php';
    }

}