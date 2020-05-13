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
 /*
        Valicadion de Ingresar los Nombres
 */

var validarNombre = function(){
    var nombre = String(document.getElementsByName("nombre")[0].value);
    var cadena = nombre.split(" ");
    var tam = cadena.length;
    var su1 = false;   
    if(tam > 2){
        document.getElementById('mensajeNombre').innerHTML = '<br>Solo se permiten dos nombres';
        document.getElementById('mensajeNombre').style.color = 'red';
        document.getElementsByName("nombre")[0].style.border = '3px red solid';
    }else if (tam === 2) {
        var nom1 = cadena[0].split("");
        var nom2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=nom1.length; i++){              
            if(isNaN(nom1[i])===false){
                validador = true;
                document.getElementsByName("nombre")[0].style.border =  '1px solid black';
                document.getElementById('mensajeNombre').innerHTML = ''
            }
        }
        for(var i=0; i<=nom2.length; i++){
            if(isNaN(nom2[i])===false){
                validador = true;
            }else{
            }
        }
        if(validador===true){
            document.getElementById('mensajeNombre').innerHTML = '<br>No se permiten numeros en los nombres';
            document.getElementById('mensajeNombre').style.color = 'red';
            document.getElementsByName("nombre")[0].style.border = '3px red solid';
        }
    }else if(tam ===1){
        var aux = nombre.split("");
        var validador = false;
        for(var i=0; i<=aux.length; i++){
            if(isNaN(aux[i])===false){
                validador = true;
            }
        }
        if(validador===true){        
            document.getElementById('mensajeNombre').innerHTML = '<br>No se permiten numeros en los nombres';
            document.getElementById('mensajeNombre').style.color = 'red';
            document.getElementsByName("nombre")[0].style.border = '3px red solid';
        }else{
            document.getElementsByName("nombre")[0].style.border =  '1px solid black';
            document.getElementById('mensajeNombre').innerHTML = ''
        }
    } 
}
/*
        Valicadion de Ingresar los Apellidos
 */

var validarApellido = function(){
    var apellido = String(document.getElementsByName("apellido")[0].value);
    var cadena = apellido.split(" ");
    var tam = cadena.length;
    var su1 = false;   
    if(tam > 2){
        document.getElementById('mensajeApellido').innerHTML = '<br>Solo se permiten dos Apellidos';
        document.getElementById('mensajeApellido').style.color = 'red';
        document.getElementsByName("apellido")[0].style.border = '3px red solid';
    }else if (tam === 2) {
        var ape1 = cadena[0].split("");
        var ape2 = cadena[1].split("");
        var validador = false;
        for(var i=0; i<=ape1.length; i++){              
            if(isNaN(ape1[i])===false){
                validador = true;
                document.getElementsByName("mensajeApellido")[0].style.border =  '1px solid black';
                document.getElementById('mensajeApellido').innerHTML = ''
            }
        }
        for(var i=0; i<=ape2.length; i++){
            if(isNaN(ape2[i])===false){
                validador = true;
            }else{
            }
        }
        if(validador===true){
            document.getElementById('mensajeApellido').innerHTML = '<br>No se permiten numeros en los apellidos';
            document.getElementById('mensajeApellido').style.color = 'red';
            document.getElementsByName("apellido")[0].style.border = '3px red solid';
        }
    }else if(tam ===1){
        var aux = apellido.split("");
        var validador = false;
        for(var i=0; i<=aux.length; i++){
            if(isNaN(aux[i])===false){
                validador = true;
            }
        }
        if(validador===true){        
            document.getElementById('mensajeApellido').innerHTML = '<br>No se permiten numeros en los Apellidos';
            document.getElementById('mensajeApellido').style.color = 'red';
            document.getElementsByName("apellido")[0].style.border = '3px red solid';
        }else{
            document.getElementsByName("apellido")[0].style.border =  '1px solid black';
            document.getElementById('mensajeApellido').innerHTML = ''
        }
    } 
}
/*
    Validar Telefono 
 */
var validarTelefono = function(){
    var telefono1 = String(document.getElementsByName("telefono")[0].value).split("");


    if(isNaN(String(document.getElementsByName("telefono")[0].value))===true){
        //alert('no se permiten numeros')
        document.getElementById('mensajetTelefono').innerHTML = '<br>No se permiten letras';
        document.getElementById('mensajeTelefono').style.color = 'red';
        document.getElementsByName("telefono")[0].style.border = '3px red solid';
    }else{
        document.getElementsByName("telefono")[0].style.border =  '1px solid black';
        document.getElementById('mensajeTelefono').innerHTML = '';
    }

    if(telefono1.length>10){
        //alert("Solo se permite un maximo de 10 caracteres");
        document.getElementsByName("telefono")[0].style.border = '3px red solid';
        document.getElementById('mensajeTelefono').innerHTML = '<br> Solo 10 digitos';
        document.getElementById('mensajeTelefono').style.color = 'red';
        
    }else{
        document.getElementsByName("telefono")[0].style.border =  '1px solid black';
        document.getElementById('mensajeTelefono').innerHTML = '';
        
    }
}

/*
    Validar Fecha de Nacimiento
*/
var validarFecha = function() {
    var elemento = document.getElementsByName("fechaNacimiento")[0];
    if(elemento.value.length == 10) {
        var dia = elemento.value[0]+elemento.value[1];
        var mes = elemento.value[3]+elemento.value[4];
        var ano = elemento.value[6]+elemento.value[7]+elemento.value[8]+elemento.value[9];

        console.log(ano);

        if( ((dia < 1)||(dia > 31)) || (elemento.value[2] != "/") || ((mes < 1) || (mes > 12)) || (elemento.value[5] != "/") || ((ano < 0) || (ano > 2020) || (ano < 1900)) ) {
            //alert('Formato Incorrecto');
            document.getElementsByName("fechaNacimiento")[0].style.border = '3px red solid';
            document.getElementById('mensajeFecha').innerHTML = '<br>Formato Incorrecto';
            document.getElementById('mensajeFecha').style.color = 'red';
        }else{
            document.getElementsByName("fechaNacimiento")[0].style.border =  '1px solid black';
            document.getElementById('mensajeFecha').innerHTML = '';
        }

    } else if(elemento.value.length > 10) {
        //alert('Formato Incorrectoa');
        document.getElementsByName("fechaNacimiento")[0].style.border = '3px red solid';
        document.getElementById('mensajeFecha').innerHTML = '<br> Formato de fecha Incorrecto formta es dd/mm/yyyy';
        document.getElementById('mensajeFecha').style.color = 'red';

    }else{
        document.getElementsByName("fechaNacimiento")[0].style.border =  '1px solid black';
        document.getElementById('mensajeFecha').innerHTML = '';
    }
}
/*
    Validar Correo 
 */
var validarEmail=function (){
    var nombre = String(document.getElementsByName("correo")[0].value);
    var cadena = nombre.split("@");
    if((cadena[0] != " ") && cadena[1] != null ){
        
        var parte1 = cadena[0].split("");
        console.log(parte1.length);
        //Realizar con el domimio ups.edu.ec est.ups.edu.ec
        if(parte1.length >= 3){
            var parte2 = cadena[1];
            var dominio1 = "ups.edu.ec";
            var dominio2 = "est.ups.edu.ec";
            if((parte2 === dominio2)||(parte2 === dominio1)){
            }else{
                if(parte2.length > 9){
                    document.getElementsByName("correo")[0].style.border = '3px red solid';
                    document.getElementById('mensajeCorreo').innerHTML = '<br>Se nececita un dominio ups.edu.ec o est.ups.edu.ec';
                    document.getElementById('mensajeCorreo').style.color = 'red';
                }else{
                    document.getElementsByName("correo")[0].style.border =  '1px solid black';
                    document.getElementById('mensajeCorreo').innerHTML = '';
                }
            }
        }else{
            document.getElementsByName("correo")[0].style.border = '3px red solid';
            document.getElementById('mensajeCorreo').innerHTML = '<br>Formato no compatible. Se nececita minimo 3 caracteres antes del @';
            document.getElementById('mensajeCorreo').style.color = 'red';
        }
    }
}
/*
    Validar password 
*/

var validarPassword = function() {
    var el = document.getElementsByName("contrasena")[0].value;
    var elemento = el.split("");
    if(elemento.length > 0) {
        if(elemento.length >= 8) {		
            var mayuscula = false;
            var minuscula = false;
            var numero = false;
            var caracter_especial = false;
            for(var i = 0;i<elemento.length;i++) {
                if(el.charCodeAt(i) >= 65 && el.charCodeAt(i) <= 90) {
                    mayuscula = true;
                } else if(el.charCodeAt(i) >= 97 && el.charCodeAt(i) <= 122) {
                    minuscula = true;
                } else if(el.charCodeAt(i) >= 48 && el.charCodeAt(i) <= 57) {
                    numero = true;
                } else if(el.charCodeAt(i) == 64 || el.charCodeAt(i) == 95 || el.charCodeAt(i) == 36) {
                    caracter_especial = true;
                }  else {
                    return true;
                }
            }
            if(mayuscula === true && minuscula === true && caracter_especial === true && numero === true) {
                document.getElementsByName("contrasena")[0].style.border =  '1px solid black';
                document.getElementById('mensajePassword').innerHTML = '';
            } else {
                document.getElementsByName("contrasena")[0].style.border = '3px red solid';
                document.getElementById('mensajePassword').innerHTML = '<br>La Contrasena debe tener: Numeros, Letras Mayusculas y minusculas y caracteres especiales';
                document.getElementById('mensajePassword').style.color = 'red';
            }
        } else {
            document.getElementsByName("contrasena")[0].style.border = '3px red solid';
            document.getElementById('mensajePassword').innerHTML = '<br>contrasena demasiado Corta';
            document.getElementById('mensajePassword').style.color = 'red';
        }
    } else {
        document.getElementsByName("contrasena")[0].style.border = '3px red solid';
        document.getElementById('mensajePassword').innerHTML = '<br>No existe Contrasena';
        document.getElementById('mensajePassword').style.color = 'red';
    }
}
