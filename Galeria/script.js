misFotos=[]
muestra=0;
window.onload = function() {

    pantalla=document.getElementById("visor"); 
    foto=document.getElementById("fotoSale"); 
    fotoAnt=document.getElementById("fotoEntra"); 
    nueva=document.getElementById("sss");
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
  }