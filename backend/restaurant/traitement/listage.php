<?php
        if($_GET["data"]){
                $type=$_GET['data'];
                $query=($type=="menu")?"SELECT * FROM ".$type." INNER JOIN recette USING(idRecette)":"SELECT * FROM ".$type; 
                $query=($type=="commande")?"SELECT * FROM liste".$type:$query;
                $requete=$connexion->query($query);
                $donnees=$requete->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($donnees);
        }