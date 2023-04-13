// DEclaração condidicionais
// if (condição == false){
// bloco de código
//}

/*
Pode ser reescrito dessa forma 

if(!condição){
    bloco de código
}

*/

/*

 if (condição){
    bloco de código
 }
  
 */

let funcionario = {
  nome: "josé",
  idade: 25,
  cargo: "Programador",
};

let cargo = {
  cargo1: "Programador",
  cargo2: "Gerente de projeto",
  cargo3: "UX/UI",
};

if (funcionario.nome === "josé") {
  console.log("Idade:", funcionario.idade);
} else {
  console.log(funcionario.cargo);
}

if (funcionario.nome === "mauricio") {
  console.log("Idade:", funcionario.idade);
} else if (funcionario.cargo === cargo.cargo1) {
  console.log("usuario inexistente");
} else {
  console.log("Erro");
}

// Reescrevendo de uma fomra melhor

if (funcionario.nome === "mauricio") {
  console.log("Idade", funcionario.idade);
} else {
  if (funcionario.cargo === cargo.cargo1) {
    console.log("usuario inexistente");
  } else {
    console.log("Erro");
  }
}

console.log("============");

/*
1. Escreva um programa para ler 2 valores (considere que nãoo serão iformados valores iguais) 
e escreva o maior deles.
*/

let numero1 = 15;
let numero2 = 12;

if (numero1 > numero2) {
  console.log("O maior número é =", numero1);
} else {
  console.log("O maior número é =", numero2);
}

/*
2. Escreva um programa para ler o ano de nascimento da uma pessoa e escrever uma mensagem diga se ela podera ou não votar este ano (não considerar o mes)

*/
let anoDeNascimento = 1993;
let anoAtual = 2023;
let idade = anoAtual - anoDeNascimento;
if (idade < 16) {
  console.log("Esta pessoa não pode votar");
} else if (idade >= 16 && idade < 18) {
  console.log("O voto é facultativo!");
} else if (idade >= 18 && idade <= 70) {
  console.log("pode votar");
} else {
  console.log("O foto é facultativo para essa pessoa");
}
/*
3. Escreva uma programa para ler três numeros (n1, n2, n3)
e imprimir na mesma sequencia de entrada,
entretanto os valores devem está na ordem crescente

*/
let n1 = 3;
let n2 = 6;
let n3 = 1;

if(n1 > n2) {
  let temp = n1;
  n1 = n2;
  n2 = temp;
}

if(n2 > n3) {
  let temp = n2;
  n2 = n3;
  n3 = temp;
}

if(n1 > n2) {
  let temp = n1;
  n1 = n2;
  n2 = temp;
}

console.log(n1, n2, n3);

console.log("N1", n1);
console.log("N2", n2);
console.log("N3", n3);
