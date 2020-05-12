misFotos=[]
muestra=0;
window.onload = function() {

    pantalla=document.getElementById("visor"); 
    foto=document.getElementById("fotoSale"); 
    fotoAnt=document.getElementById("fotoEntra"); 
    document.getElementById("controlesre").disabled=true;
    document.getElementById("controlesav").disabled=true;
    document.getElementById("controlesin").disabled=false;
}
var aux=0;
function randomico(){
    //Cargar Imagenes 
    misFotos=["<img src='imagenes/img1.jpg' alt='' >",
    "<img src='imagenes/img2.jpg' alt='' >",
    "<img src='imagenes/img3.jpg' alt='' >",
    "<img src='imagenes/img4.jpg' alt='' >",
    "<img src='imagenes/img5.jpg' alt='' >",
    "<img src='imagenes/img6.jpg' alt='' >",
    "<img src='imagenes/img7.jpg' alt='' >",
    "<img src='imagenes/img8.jpg' alt='' >",
    "<img src='imagenes/img9.jpg' alt='' >",
    "<img src='imagenes/img10.jpg' alt='' >"]
    for (var i=1; i<6; i++) {
        //var aleatorio = Math.floor(Math.random()*11)+1;
        var aleatorio = Math.ceil(Math.random()*11);
        misFotos[i]="<img src ='imagenes/img"+aleatorio +".jpg' alt='' >";
        var existe = false;
        for (var i=0; i<6; i++){
            if (misFotos [i] == aleatorio){
                existe =true;
                break;
            }
        }
        if (!existe) {
            misFotos[6]=aleatorio;
            
        }
        //aux=aleatorio;
        console.log('vectorqq: '+aleatorio)
    }
    console.log('vectorww: '+ misFotos[aleatorio])
    foto.innerHTML=misFotos[1];
    muestra=1;
    document.getElementById("controlesre").disabled=false;
    document.getElementById("controlesav").disabled=false;
    document.getElementById("controlesin").disabled=true;
  }

  function mueve(opcion) {
    anterior=misFotos[muestra]; 
    fotoAnt.innerHTML=anterior;
    switch (opcion) { 
        case "avance": 
           muestra++;
           if (muestra>=5) {
              muestra=5; 
              document.getElementById("controlesav").disabled=true;
               document.getElementById("controlesin").disabled=false;
           } 
           estilo="derecho"; 
        break;
        case "retro":
        muestra--;
        if (muestra<2) { 
         muestra=1;
         document.getElementById("controlesre").disabled=true;
         document.getElementById("controlesin").disabled=false;
        } 
        estilo="izquierdo" 
        break;
     }
     ver=misFotos[muestra]; 
     mueveFoto = 600; 
     mueveFoto2=-600; 
     completado=setInterval(transicion,40); 
     }

function transicion() { 
     if (estilo=="derecho") {	
        mueveFoto-=10; 
        mueveAnt=mueveFoto-600; 
        cambioFoto=mueveFoto+"px"; //a&ntilde;adimos "px" para poder usar estilo CSS
        cambioAnt=mueveAnt+"px";
        foto.style.left=cambioFoto; //Cambio de posici&oacute;n mediante estilo CSS
        fotoAnt.style.left=cambioAnt;
        foto.innerHTML=ver; //Visionamos la imagen nueva.
        if (mueveFoto<=0) { //al completar la transici&oacute;n debemos parar el movimiento
           parar() //funci&oacute;n que para el movimiento.
           }
        }
     //Transici&oacute;n de izquierda a derecha. El proceso es similar al anterior
     else if (estilo=="izquierdo") {  		
        mueveFoto2+=10; //las fotos se mueven hacia la derecha 
        mueveAnt=mueveFoto2+600;
        cambioFoto=mueveFoto2+"px";
        cambioAnt=mueveAnt+"px";
        foto.style.left=cambioFoto;
        fotoAnt.style.left=cambioAnt;
        foto.innerHTML=ver;
        if (mueveFoto2>=0) {
           parar()
           }
        }
     }
function parar() { //parar el movimiento al finalizar la transici&oacute;n. 
    clearInterval(completado); //paramos el movimiento de im&aacute;genes
    numFoto=+muestra; //esta l&iacute;nea y las dos siguientes cambian el pie de foto.
    numff=muestra+1; //colocamos la nueva foto como fondo del visor.
    fotoFondo="img"+numff+".jpg";
    imagenFondo="url(imagenes/"+fotoFondo+")";
    pantalla.style.backgroundImage=imagenFondo
}