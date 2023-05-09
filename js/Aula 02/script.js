
function somarDoisNumeros() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let resultado = document.getElementById("resultadoSoma");
  

  resultado.innerHTML = Number(valor1) + Number(valor2);
}


var cont = 0;
function contar() {
  var resultado = document.getElementById("resultado");
  cont = cont + 1;
  resultado.innerHTML = cont;
}
function resert(){
  resultado.innerHTML = 0;
  cont = 0;
  
}



