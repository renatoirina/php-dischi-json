<?php
// api.php

header('Content-Type: application/json');

// Legge i dati dal file JSON
$jsonData = file_get_contents('dischi.json');

// Restituisce i dati in formato JSON
echo $jsonData;
?>
