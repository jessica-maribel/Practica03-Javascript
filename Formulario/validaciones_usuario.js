//Varibles declaradas
var frmcedula = false;
var frmnombre = false;
var frmapellido = false;
var frmtelefono = false;
var frmdireccion = false;
var frmfecha = false;
var frmmail = false;
var frmpassword = false;

var validarCampos = function(){
    if (String (document.getElementsByName("cedula")[0].value) != ""){
        frmcedula = true;
    }else 

    if (String(document.getElementsByName("nombre")[0].value) != ""){
        frmnombre = true;
    }
    if (String(document.getElementsByName("apellido")[0].value) != ""){
        frmapellido = true;
    }
    if (String(document.getElementsByName("telefono")[0].value) != ""){
        frmtelefono = true;
    }
    if (String(document.getElementsByName("direccion")[0].value) != ""){
        frmdireccion = true;
    }
    if (String(document.getElementsByName("fechaNacimiento")[0].value) != ""){
        frmfecha = true;
    }
    if (String(document.getElementsByName("correo")[0].value) != ""){
        frmmail = true;
    }
    if (String(document.getElementsByName("contrasena")[0].value) != ""){
        frmpassword = true;
    }
    if ((frmcedula === true) && (frmnombre == true) && (frmapellido === true) && (frmtelefono === true) && (frmmail === true) (frmpassword === true)){
        alert('   Bienvenido =D ')
    }else {
        alert('¡ Por Favor ! Llenar todos los campos')
    }
}

/*
        Valicadion de la Cedula
 */
var validarCedula = function(){
    document.getElementsByName("cedula")[0].value;
    var cedula = String(document.getElementsByName("cedula")[0].value);

    if (isNaN(cedula)){
        document.getElementById("mensajeCedula").innerHTML = '<br> Cedula Invalida';
        document.getElementById("mensajeCedula").style.color = 'red';
        document.getElementsByName("cedula")[0].style.border = '4px red solid';
    }else {
        var auxiliar = cedula.split("");
        if (cedula.length > 10) {
            alert("Se permite 10 digitos")
        }

        if (cedula.length == 10){
            cedulaCorrecta(cedula);
        }
    }
}

/*
        Validar si la cedula es correcta
 */

 var cedulaCorrecta = function(cedula){
    if (cedula.length == 10 ){
        var ditio_rgn = cedula.substring(0,2);
        if (ditio_rgn >= 1 && ditio_rgn <= 24){
            var udigito = cedula.substring(9,10);
            var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
            var num1 = cedula.substring(0,1);
            num1 = (num1 * 2);
            if (num1 > 9){
                num1 = (num1 -9);
            }
            var num3 = cedula.substring(2,3);
            num3 = (num3 * 2);
            if (num3 > 9){
                num3 = (num3 -9);
            }
            var num5 = cedula.substring(4,5);
            num5 = (num5 * 2);
            if (num5 > 9){
                num5 = (num5 -9);
            }
            var num7 = cedula.substring(6,7);
            num7 = (num7 * 2);
            if (num7 > 9){
                num7 = (num7 -9);
            }
            var num9 = cedula.substring(8,9);
            num9 = (num9 * 2);
            if (num9 > 9){
                num9 = (num9 -9);
            }
            var impares = num1 + num3 + num5 + num7 + num9;
            var total = (pares+impares);
            var pdigsum = String(total).substring(0,1);
            var dec = (parseInt(pdigsum)+1)*10;
            var digvalidardor = dec-total;
            if (digvalidardor == 10) {
                var digvalidardor = 0;
            }
            if (digvalidardor == udigito){
                console.log("la cedula "+cedula+" es valida");
                document.getElementById('mensajeCedula').innerHTML = '';
                document.getElementsByName("cedula")[0].style.border = '1px solid black';
                frmcedula = true;
            }else {
                console.log("la cedula "+cedula+" es invalida");
                document.getElementById('mensajeCedula').innerHTML = '<br> Cedula Invalida ... ';
                document.getElementsByName("cedula")[0].style.border = '3px solid red';
            }
        }else {
            console.log("La cedula no pertenece a ninguna region ");
            document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida ...';
            document.getElementsByName("cedula")[0].style.border = '1px solid black';
        }
    }else {
        console.log("la cedula tiene menos 10 digitos");
        document.getElementById('mensajeCedula').innerHTML = '<br>Cedula Invalida ...';
        document.getElementsByName("cedula")[0].style.border = '3px solid red';
    }
 }