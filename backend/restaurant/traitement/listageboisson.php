<?php
        $requete=$connexion->query("SELECT * FROM boisson");
        $donnees=$requete->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($donnees);
