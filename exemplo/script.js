let opcaoMenu = Number(
    prompt(
      "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair"
    )
  );
  
  do {
    if (opcaoMenu > 0 && opcaoMenu < 5) {
      let numero1 = Number(prompt("Digite o 1º numero"));
      let numero2 = Number(prompt("Digite o 2º numero"));
  
      switch (opcaoMenu) {
        case 1:
          alert("O resultado da soma é: " + (numero1 + numero2));
          break;
  
        case 2:
          alert("O resultado da multiplicacao é: " + numero1 * numero2);
          break;
  
        case 3:
          alert("O resultado da subtracao é: " + (numero1 - numero2));
          break;
  
        case 4:
          alert("O resultado da divisao é: " + numero1 / numero2);
          break;
  
        default:
          alert("Opção inválida!");
      }
    }
    opcaoMenu = Number(
      prompt(
        "MENU\n1 - Soma de 2 numeros\n2 - Multiplicar 2 numeros\n3 - Subtrair 2 numeros\n4 - Dividir 2 numeros\n0 - Sair"
      )
    );
  } while (opcaoMenu !== 0);
  