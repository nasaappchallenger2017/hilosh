<html>
<head>
    <title>Login - HilOsH</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
    </style>
</head>
<body>

    <div class="container">

        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h1>Ingreso de usuarios HilOsH</h1>
                <hr>
                <form class="form-signin">
                    <h2 class="form-signin-heading">Ingrese al sistema</h2>
                    <label for="usuario" class="sr-only">Usuario</label>
                    <input type="text" id="usuario" class="form-control" placeholder="Nombre de usuario" required autofocus>
                    <label for="contrasena" class="sr-only">Contraseña</label>
                    <input type="password" id="contrasena" class="form-control" placeholder="Contraseña" required>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                    <a href="registro.php" class="btn btn-lg btn-success btn-block" type="submit">Registro</a>
                </form>
            </div>
        </div>

    </div>

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>