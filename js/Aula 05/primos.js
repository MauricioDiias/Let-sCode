//usando for

// imprimir o menor numero do Array
// imprimir o maior numero do Array
// imprimir todos os numeros menores do que 7 do array
// imprimir todos os numeros maiores que 7 do array

let array = [2, 5, 3, 8, 9, 12, -4, 1, 19];

for (var i = 0; i < 8; i++) {
  console.log(i);
}

// 4 - imprimir o menor numero do array
let menor = array[0];

let soma = 0;
let media = 0;

for (let i = 0; i < array.length; i++) {
  soma += array[i];
}

media = soma / array.length;

console.log(`A média dos números é ${media}`);

// 12 imprimir a sequencia de fibonaci até o maior numero do array
var fib = [0, 1];
for (i = 2; i < 100; i++) {
  let nexfibo = fib[i - 1] + fib[i - 2];
  if (nexfibo > 13) {
    break;
  }
  fib.push(nexfibo);
}
console.log(fib);








