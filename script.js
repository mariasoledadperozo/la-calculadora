var input = document.getElementById('input');
var operacionActual; 

function actualizarInput() {
    input.value = operacionActual;
}

function colocarNumero(numero){
    operacionActual += numero; 
    actualizarPantalla(); 
}

function agregarOperador(operador){
    operacionActual+=operador; 
    actualizarPantalla(); 
}

function limpiarInput(){
    input.value=" "; 
    actualizarPantalla(); 
}

