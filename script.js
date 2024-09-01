var resultado = document.getElementById('resultado').value; 
var boton = document.getElementById('button').value; 

boton.onclick = function(value){
    resultado.value += this.value; 
}