let pedidos = [];

function adicionarPedido() {
  const nome = document.getElementById('nome').value;
  const endereco = document.getElementById('endereco').value;
  const sabor = document.getElementById('sabor').value;
  const tamanho = document.querySelector('input[name="tamanho"]:checked').value;
  const adicionais = [];
  const adicionaisSelecionados = document.getElementsByName('adicionais');
  for (let i = 0; i < adicionaisSelecionados.length; i++) {
    if (adicionaisSelecionados[i].checked) {
      adicionais.push(adicionaisSelecionados[i].value);
    }
  }
  const observacoes = document.getElementById('observacoes').value;
  const pedido = { nome, endereco, sabor, tamanho, adicionais, observacoes };
  pedidos.push(pedido);
  exibirPedidos();
}

function exibirPedidos() {
  const listaPedidos = document.querySelector('#pedidos ul');
  listaPedidos.innerHTML = '';
  pedidos.forEach(pedido => {
    const itemPedido = document.createElement('li');
    itemPedido.innerHTML = `
      <h3>${pedido.sabor} - ${pedido.tamanho}</h3>
      <p><strong>Nome:</strong> ${pedido.nome}</p>
      <p><strong>Endereço:</strong> ${pedido.endereco}</p>
      <p><strong>Adicionais:</strong> ${pedido.adicionais.join(', ')}</p>
      <p><strong>Observações:</strong> ${pedido.observacoes}</p>
    `;
    listaPedidos.appendChild(itemPedido);
  });
}

function imprimirPedido() {
  const conteudoPedido = document.querySelector('#pedidos').innerHTML;
  const janelaImprimir = window.open('', 'Imprimir Pedido', 'height=600,width=800');
  janelaImprimir.document.write(`<html><head><title>Pedido de Pizza</title></head><body>${conteudoPedido}</body></html>`);
  janelaImprimir.document.close();
  janelaImprimir.focus();
  janelaImprimir.print();
}
