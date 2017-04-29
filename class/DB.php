<?php

class DB extends mysqli
{
    const CONFIG_USUARIO = 'root';
    const CONFIG_CONTRASENA = '123';
    const CONFIG_BASEDATOS = 'nasa';
    const CONFIG_HOST = 'localhost';
    public $result;

    public function __construct()
    {
        parent::__construct(self::CONFIG_HOST, self::CONFIG_USUARIO, self::CONFIG_CONTRASENA, self::CONFIG_BASEDATOS);
        parent::set_charset('utf8');
    }

    public function query($sql)
    {
        $this->result = parent::query($sql);
    }

    public function getResults() {
        if ($this->result->num_rows > 0) {
            $datos = [];
            while($row = $this->result->fetch_assoc()) {
                $datos[] = $row;
            }
        } else {
            return [];
        }

        return $datos;
    }
}

$db = new DB();