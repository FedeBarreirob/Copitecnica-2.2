sol = document.getElementById("mododia");
luna = document.getElementById("modonoche");
cambia = document.getElementById("botonTema");
contador = 1;

function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 

}

function cambiarImagen(){
 

    if(contador==0){
        luna.style.display="block";
        sol.style.display="none";
        contador=1;
    }
     else{
        luna.style.display="none";
        sol.style.display="block";
        contador=0;
    }
}




