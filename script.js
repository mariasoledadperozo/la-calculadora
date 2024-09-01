var resultado = document.getElementById('resultado');


function colocarNumero(numero){
    resultado.value += numero; 
}


function borrarNumero(){
    resultado.value='  '; 
}