let botaoSalvar = document.getElementById("salvar");
let listaTabela = document.getElementById("listTable");
let elementoEditado;
onload = () => {
  let lista = localStorage.getItem("lista");
  if (lista !== null) {
    listaTabela.innerHTML = lista;
  }
};
const excluirValor = (elemento) => {
  localStorage.removeItem("lista");
  let itemLista = elemento.closest("tr");
  itemLista.remove();
  localStorage.setItem("lista", listaTabela.innerHTML);
};

const editarValor = (elemento) => {
  console.log(elemento);
  elementoEditado = elemento;

  let itemLista = elemento.closest("tr");
  let nome = itemLista.querySelector("td:nth-child(1)");
  let preco = itemLista.querySelector("td:nth-child(2)");
  let quantidade = itemLista.querySelector("td:nth-child(3)");
  console.log(nome, preco, quantidade);
  let valorPreco = preco.innerHTML.replace("R$&nbsp;", "");

  const nameInput = document.getElementById("nome");
  nameInput.value = nome.innerHTML;

  let priceInput = document.getElementById("preco");
  priceInput.value = valorPreco;

  const quantidadeInput = document.getElementById("quantidade");
  quantidadeInput.value = quantidade.innerHTML;
  excluirValor(itemLista)
};

botaoSalvar.addEventListener("click", () => {
  let nome = document.getElementById("nome");
  let preco = document.getElementById("preco");
  let quantidade = document.getElementById("quantidade");

  if (nome.value && preco.value && quantidade.value) {
    
      listaTabela.innerHTML += `
    <tr>
    <td>${nome.value}</td>
    <td>${parseFloat(preco.value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</td>
    <td>${quantidade.value}</td>
    <td><i class="fa-regular fa-pen-to-square" style="color: #100c58;" onclick='editarValor(this)'></i></td>
    <td><i onclick='excluirValor(this)' class="fa-solid fa-trash" style="color: #100c58";></i></td>
    </tr>
    `;

      localStorage.setItem("lista", listaTabela.innerHTML);
      nome.value = "";
      preco.value = "";
      quantidade.value = "";
      console.log(nome);
    
  } else {
  }
});
