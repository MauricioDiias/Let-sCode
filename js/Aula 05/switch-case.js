//alert e prompt

// MENU
// 1 - Soma de 2 numeros;
// 2 - Multiplicar 2 numeros;
// 3 - Subtrair 2 numeros;
// 4 - Dividir 2 numeros;
// 0 - Sair
//("MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair ");

// let opcao = prompt(
//   "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair "
// );

// if (opcao == 1) {
//   let numero1 = Number(prompt("Escolha o primeiro número"));
//   let numero2 = Number(prompt("Escolha o segundo número"));
//   let resultado = numero1 + numero2;
//   alert(`O resultado da Soma é ${resultado}`);
// }
// if (opcao == 2) {
//   let numero1 = Number(prompt("Escolha o primeiro número"));
//   let numero2 = Number(prompt("Escolha o segundo número"));
//   let resultado = numero1 * numero2;
//   alert(`O resultado da Multiplicação é ${resultado}`);
// }
// if (opcao == 3) {
//   let numero1 = Number(prompt("Escolha o primeiro número"));
//   let numero2 = Number(prompt("Escolha o segundo número"));
//   let resultado = numero1 - numero2;
//   alert(`O resultado da Subtração é ${resultado}`);
// }
// if (opcao == 4) {
//   let numero1 = Number(prompt("Escolha o primeiro número"));
//   let numero2 = Number(prompt("Escolha o segundo número"));
//   let resultado = numero1 / numero2;
//   alert(`O resultado da Divisão é ${resultado}`);
// }

// uma forma mais simplificada

// let op2 = prompt(
//   "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair "
// );
// let numero1 = Number(prompt("Escolha o primeiro número"));
// let numero2 = Number(prompt("Escolha o segundo número"));

// if (op2 == 1) {
//   alert(`O resultado da Soma é ${numero1 + numero2}`);
// }
// if (op2 == 2) {
//   alert(`O resultado da Multiplicação é ${numero1 * numero2}`);
// }
// if (op2 == 3) {
//   alert(`O resultado da Subtração é ${numero1 - numero2}`);
// }
// if (op2 == 4) {
//   alert(`O resultado da Divisão é ${numero1 / numero2}`);
// }

//switch case

let op3 = prompt(
  "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair "
);
switch (op3) {
  case op3 > 0 && op3 < 5:
    let numero11 = Number(prompt("Escolha o primeiro número"));
    let numero22 = Number(prompt("Escolha o segundo número"));

  case op3 == 1:
    alert(`O resultado da Soma é ${numero11 + numero22}`);
    break;
  case op3 == 2:
    alert(`O resultado da Multiplicação é ${numero11 * numero22}`);
    break;
  case op3 == 3:
    alert(`O resultado da Subtração é ${numero11 - numero22}`);
    break;
  case op3 == 4:
    alert(`O resultado da Divisão é ${numero11 / numero22}`);
    break;
  default:
    alert("Até a proxima !");
}

// forma correta!

// let op3 = prompt(
//   "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair "
// );
// let numero11, numero22;
// switch (op3) {
//   case "1":
//     numero11 = Number(prompt("Escolha o primeiro número"));
//     numero22 = Number(prompt("Escolha o segundo número"));
//     alert(`O resultado da Soma é ${numero11 + numero22}`);
//     break;

//   case "2":
//     numero11 = Number(prompt("Escolha o primeiro número"));
//     numero22 = Number(prompt("Escolha o segundo número"));
//     alert(`O resultado da Multiplicação é ${numero11 * numero22}`);
//     break;

//   case "3":
//     numero11 = Number(prompt("Escolha o primeiro número"));
//     numero22 = Number(prompt("Escolha o segundo número"));
//     alert(`O resultado da Subtração é ${numero11 - numero22}`);
//     break;

//   case "4":
//     numero11 = Number(prompt("Escolha o primeiro número"));
//     numero22 = Number(prompt("Escolha o segundo número"));
//     alert(`O resultado da Divisão é ${numero11 / numero22}`);
//     break;

//   default:
//     alert("Até a proxima !");
//     break;
// }
