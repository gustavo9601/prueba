/*Funcion para cargar el html dinamicamente*/
function cargar(numeroPagina) {
    request = "op" + numeroPagina + ".html";
    cadena = "a=1";
    metodo = function (datos) {
        $("#contect").html(datos);
    }
    f_ajax(request, cadena, metodo);
}


/*Funcion de suma*/
function suma() {
    //captura de valores
    var numero1 = $('#numero1').val();
    var numero2 = $('#numero2').val();

    //validando que los campos no esten vacios
    if (numero1 == "" || numero2 == "") {
        $('#respuesta').html("<h1>Digite valores validos</h1>");
    } else {
        request = "suma.php";
        cadena = "numero1=" + numero1 + "&numero2=" + numero2;
        metodo = function (datos) {
            //mostramo el resultado
            console.log(datos);
            $('#respuesta').html(datos);
        }

        f_ajax(request, cadena, metodo);

    }

}