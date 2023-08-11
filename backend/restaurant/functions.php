<?php


function genererID($param){

    $fichier=__DIR__."/traitement/".$param.".txt";

    $lastID=file_get_contents($fichier);
    $index=intval($lastID);
    $index=$index+1;

    $fileHandle = fopen($fichier, 'w');
    $newContent = strval($index);
    fwrite($fileHandle, $newContent);
    fclose($fileHandle);

    return strtoupper(substr($param,0,1)).strval(intval($index/100)).strval(intval($index/10)).$index%10;
} 
function getName($param){
    $connexion=new PDO("mysql:dbname=restaurant","root","admin");
    $requete=$connexion->prepare("SELECT nomMenu FROM menu WHERE idMenu=?");
    $resultat=$requete->execute([$param]);
    $nomMenu=$requete->fetch(PDO::FETCH_ASSOC)['nomMenu'];
    return $nomMenu;
}