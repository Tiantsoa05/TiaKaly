<?php
if(!empty($_GET['id']) && !empty($_GET['quantite'])){
    $idMenu=$_GET['id'];
    $quantite=$_GET['quantite'];
   
    $requete=$connexion->prepare("INSERT INTO commande VALUES(?,?,CURDATE(),?)");
    $resultat=$requete->execute([genererID('commande'),$idMenu,$quantite]);

    $requete=$connexion->prepare("INSERT INTO listecommande VALUES(?,?,?)");
    $resultat=$requete->execute([genererID('commande'),getName($idMenu),$quantite]);


    if($resultat>0){
        echo json_encode([
            'status'=>"success",
            'message'=>"Commande réussie"
        ]);
    }
}