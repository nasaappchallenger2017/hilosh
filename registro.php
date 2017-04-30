<?php
require_once 'includes.php';
$error = null;

if (isset($_POST['usuario'])) {
    $nombre = isset($_POST['nombre'])?$_POST['nombre'] : null;
    $email = isset($_POST['email'])?$_POST['email'] : null;
    $telefono = isset($_POST['telefono'])?$_POST['telefono'] : null;
    $usuario = isset($_POST['usuario'])?$_POST['usuario'] : null;
    $contrasena = isset($_POST['contrasena'])?$_POST['contrasena'] : null;
    $localidad = isset($_POST['localidad'])?$_POST['localidad'] : null;
    $barrio = isset($_POST['barrio'])?$_POST['barrio'] : null;
    $calle = isset($_POST['calle'])?$_POST['calle'] : null;
    $numero = isset($_POST['numero'])?$_POST['numero'] : null;

    try {
        Usuarios::Agregar($nombre, $email, $telefono, $usuario, $contrasena, $localidad, $barrio, $calle, $numero);
        header('Location: registro_confirmado.php');
    }
    catch (Exception $ex) {
        $error = $ex->getMessage();
    }

}
else {
    $localidades = Localidades::ObtenerLocalidades();
}
?>
<html>
<head>
    <title>Registro - HilOsH</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/toastr.min.css">
</head>
<body>

<div class="container">

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Registro de usuario</h1>
            <hr>
            <form method="post" class="form-registro">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input required type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <label for="email">Su email</label>
                    <input required type="email" class="form-control" id="email" name="email" placeholder="Su email">
                </div>
                <div class="form-group">
                    <label for="telefono">Número de teléfono con característica</label>
                    <input required type="text" class="form-control" id="telefono" name="telefono" placeholder="Telefono">
                </div>
                <div class="form-group">
                    <label for="usuario">Nombre de usuario</label>
                    <input required type="text" class="form-control" id="usuario" name="usuario" placeholder="Nombre de usuario">
                </div>
                <div class="form-group">
                    <label for="contrasena">Contraseña</label>
                    <input required type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Contraseña">
                </div>
                <div class="form-group">
                    <label for="localidad">Localidades</label>
                    <select id="localidad" name="localidad" required class="form-control">
                        <option>Eleja su localidad</option>
                        <?php foreach ($localidades as $localidad) { ?>
                            <option value="<?php echo $localidad['codigo']; ?>"><?php echo $localidad['nombre']; ?></option>
                        <?php } ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="barrio">Barrio</label>
                    <input required type="text" class="form-control" id="barrio" name="barrio" placeholder="Su barrio">
                </div>
                <div class="form-group">
                    <label for="calle">Calle</label>
                    <input required type="text" class="form-control" id="calle" name="calle" placeholder="Su calle">
                </div>
                <div class="form-group">
                    <label for="numero">Numero</label>
                    <input required type="text" class="form-control" id="numero" name="numero" placeholder="Su numero">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Registrar</button>
            </form>
        </div>
    </div>

</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/toastr.min.js"></script>
<script>
    $(function () {
        <?php if ($error != null) { ?>
            toastr.error('<?php echo $error; ?>', 'Uh error');
        <?php } ?>
    });
</script>
</body>
</html>