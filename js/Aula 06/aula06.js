let opcaoMenu;
let arrayMaterial = [];
do {
    opcaoMenu = Number(prompt("MENU\n1 - Adicionar Material\n2 - Remover Material\n3 - Alterar Material\n4 - Deletar Material \n5 - Listar Materiais\n0 - Sair"));

    switch(opcaoMenu) {

        case 1:
            const nomeMaterial = prompt("Digite o nome do Material");
            const qtdeMaterial = Number(prompt("Digite a quantidade de Material"));
            const precoUnitario = Number(prompt("Digite o preço unitário"));
            const Material = {
                nome: nomeMaterial,
                qtdeMaterial: qtdeMaterial,
                precoUnitario: precoUnitario
            };
            arrayMaterial.push(Material);
        break;

        case 2:
        break;

        case 3:
        break;

        case 4:
        break;

        case 5:
            let msgLista = "Nome   Quantidade   Preço(R$)\n";
            arrayMaterial.forEach( mat => {
                msgLista += `${mat.nome}   ${mat.qtdeMaterial}   ${mat.precoUnitario} \n`; 
            });
            alert(msgLista);
        break;

    }

} while (opcaoMenu != 0);
