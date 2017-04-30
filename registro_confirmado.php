<?php
require_once 'includes.php';
?>
<html>
<head>
    <title>Registro - HilOsH</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/toastr.min.css">
    <style>
        #icono-confirmacion {
            font-size: 200px;
            color: #5cb85c;
        }
        #confirmacion {
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div id="confirmacion">
                <h1>Registro confirmado!</h1>
                <hr>
                <span id="icono-confirmacion" class="glyphicon glyphicon-ok-circle"></span>
                <h3>HilOsH te avisa en caso de una emergencia!</h3>
            </div>
        </div>
    </div>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/toastr.min.js"></script>
</body>
</html>