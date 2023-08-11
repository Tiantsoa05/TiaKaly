<?php   
if(!empty($_GET['nom']) && !empty($_GET['prix']))
 {
    $nom=$_GET['nom'];
    $prix=$_GET['prix'];
   
    $requete=$connexion->prepare("INSERT INTO boisson VALUES('5B',?,?)");
    $resultat=$requete->execute([$nom,$prix]);

    if($resultat>0){
                    require'listageboisson.php';
                    }
                }