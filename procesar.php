<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Respuesta del servidor web</title>
</head>
<body>
  <h1>Respuesta del servidor una vez procesados los datos</h1>
  <?php
    echo "Nombre: " . $_POST["nombre"] . "<br>";
    #el punto es como el + de html/JS, sirve para concatenar.
    echo "E-mail: " . $_POST["email"] . "<br>";
    echo "Edad: " . $_POST["edad"];
  ?>
</body>
</html>