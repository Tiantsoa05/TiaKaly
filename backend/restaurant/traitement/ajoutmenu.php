<?php   
if(!empty($_GET['nomMenu']) && !empty($_GET['prix'])){
    $nomMenu=$_GET['nomMenu'];
    $prix=$_GET['prix'];
   
    $requete=$connexion->prepare("INSERT INTO menu VALUES(?,?,?,?)");
    $resultat=$requete->execute([genererID('menu'),join(' ',explode("_",$nomMenu)),'R9',$prix]);

    if($resultat>0){
        $_GET['data']="boisson";
        require'listage.php';
    }
}