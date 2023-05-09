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

        //Salvar atualização no local storage
        localStorage.setItem("materiais", JSON.stringify(arrayMaterial));
        alert("Material adicionado com sucesso!");
    break;

    case 2:
        const nomeMaterialRemover = prompt("Digite o nome do Material a ser removido");
        const indexMaterialRemover = arrayMaterial.findIndex(mat => mat.nome === nomeMaterialRemover);

        if(indexMaterialRemover >= 0) {
            arrayMaterial.splice(indexMaterialRemover, 1);

            //Salvar atualização no local storage
            localStorage.setItem("materiais", JSON.stringify(arrayMaterial));
            alert("Material removido com sucesso!");
        } else {
            alert("Material não encontrado!");
        }
    break;

    case 3:
        const nomeMaterialAlterar = prompt("Digite o nome do Material a ser alterado");
        const indexMaterialAlterar = arrayMaterial.findIndex(mat => mat.nome === nomeMaterialAlterar);

        if(indexMaterialAlterar >= 0) {
            const novoNomeMaterial = prompt("Digite o novo nome do Material");
            const novaQtdeMaterial = Number(prompt("Digite a nova quantidade de Material"));
            const novoPrecoUnitario = Number(prompt("Digite o novo preço unitário"));

            arrayMaterial[indexMaterialAlterar].nome = novoNomeMaterial;
            arrayMaterial[indexMaterialAlterar].qtdeMaterial = novaQtdeMaterial;
            arrayMaterial[indexMaterialAlterar].precoUnitario = novoPrecoUnitario;

            //Salvar atualização no local storage
            localStorage.setItem("materiais", JSON.stringify(arrayMaterial));
            alert("Material alterado com sucesso!");
        } else {
            alert("Material não encontrado!");
        }
    break;

    case 4:
        const nomeMaterialDeletar = prompt("Digite o nome do Material a ser deletado");
        const indexMaterialDeletar = arrayMaterial.findIndex(mat => mat.nome === nomeMaterialDeletar);

        if(indexMaterialDeletar >= 0) {
            const confirmacao = confirm(`Tem certeza que deseja deletar o material "${arrayMaterial[indexMaterialDeletar].nome}"?`);
            if(confirmacao) {
                arrayMaterial.splice(indexMaterialDeletar, 1);

                //Salvar atualização no local storage
                localStorage.setItem("materiais", JSON.stringify(arrayMaterial));
                alert("Material deletado com sucesso!");
            }
        } else {
            alert("Material não encontrado!");
        }
    break;

    case 5:
        let msgLista = "Nome   Quantidade   Preço(R$)\n";
        arrayMaterial.forEach( mat => {
            msgLista += `${mat.nome}   ${mat.qtdeMaterial}   ${mat.precoUnitario.toFixed(2)} \n`})};
