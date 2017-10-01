
<?php
/*
  * Validando que se envio por get
  * */

if(isset($_GET['numero1']) && isset($_GET['numero2'])){
    $a = $_GET['numero1'];
    $b = $_GET['numero2'];
    //respuesta si se recibe
    echo "<h1>La Suma es = " . ($a + $b) . '</h1>';

}


?>