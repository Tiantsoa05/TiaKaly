<?php
    $requete=$connexion->prepare("DELETE FROM commande");
    $resultat=$requete->execute();
    if($resultat>0){
        echo json_encode([
            'status'=>"success",
            'message'=>"suppression réussie"
        ]);
    }
