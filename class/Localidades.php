<?php

class Localidades
{
    public static function ObtenerLocalidades()
    {
        global $db;

        $sql = "select * from localidades";
        $db->query($sql);
        return $db->getResults();
    }
}