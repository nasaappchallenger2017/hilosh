<?php

require 'vendor/autoload.php';

use Goutte\Client;

$url = "http://www.prefecturanaval.gov.ar/alturas/index.php";
//$css_selector = "tbody .warning";
//$thing_to_scrape = "_text";

$client = new Client();
$crawler = $client->request('GET', $url);
$ultRegistro = $crawler->filter("tbody .warning")->extract("_text");
$nivelAlerta = $crawler->filter("td:nth-child(13)")->extract("_text");
$nivelEvacuacion = $crawler->filter("td:nth-child(14)")->extract("_text");
$estado = $crawler->filter("td:nth-child(9)")->extract("_text");
$variacion = $crawler->filter("td:nth-child(5)")->extract("_text");
$wat = $crawler->filter("td:nth-child(5)")->extract("_text");
$localidad = $crawler->filter(".pna-port-left")->extract("_text");

$leData = array();

foreach ($ultRegistro as $key => $value) {
    $leData[$key]['localidad'] = $localidad[$key];
    $leData[$key]['ultimo_registro'] = $ultRegistro[$key];
    $leData[$key]['nivel_alerta'] = $nivelAlerta[$key];
    $leData[$key]['nivel_evacuacion'] = $nivelEvacuacion[$key];
    $leData[$key]['estado'] = str_replace("estado:","",$estado[$key]);
    $leData[$key]['variacion'] = $variacion[$key];
    $leData[$key]['wat'] = $wat[$key];
}

var_dump($leData);

?>