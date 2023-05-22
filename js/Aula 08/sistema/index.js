// // limpa o local storage
// localStorage.clear();
// // pegar um item do localstorage passando a key
// const item = localStorage.getItem('key');
// //pegar a key atraves de um indice
// const item2 = localStorage.key(index);
// // adicionar um item no local satorage
// localStorage.setItem('key', 'value');
// // deletar um item correspodente a key
// localStorage.removeItem('key');
// //===============

const botaoAdicionar = document.getElementById('adicionar');
const nome = document.getElementById('nome')
const preco = document.getElementById('preco')
const quantidade = document.getElementById('quantidade')
const right = document.getElementById('right')


botaoAdicionar.addEventListener('click',()=>{
    const produto = {
        nome: nome.value,
        preco: preco.value,
        quantidade: quantidade.value
        }
        right.innerHTML += `
        <p>${produto.nome}</p>
        <p>${produto.preco}</p>
        <p>${produto.quantidade}</p>
        `
        
})