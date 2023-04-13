let numero1 = 5;
let numero2 = 10;

let maior = numero1 > numero2;

let operador = numero1 !== numero2;

console.log(maior);

console.log(operador);


// Operador condicional E (&&);

// verdadeiro E verdadeiro = verdadeiro;
// verdadeiro E falso = falso;
// falso E verdadeiro = falso;
// falso E falso = falso;


// Operador Condicional OU (||);

// verdadeiro OU verdadeiro = verdadeiro;
// verdadeiro OU falso = verdadeiro;
// falso OU falso = verdadeiro;
// falso OU falso = falso;

let Aluno = {
    nome: 'Mauricio',
    idade: 29
}

let Professor = {
    nome: 'José',
    idade: 26
}


let operação1 = Aluno.nome === 'Mauricio' && Professor.idade !== 18;

let operação2 = Aluno.nome !== "Mauricio" || Professor.idade >= 18 && Professor.idade <= 25;

let operação3 = Aluno.nome === 'Mauricio' 

