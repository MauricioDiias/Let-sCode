// Objeto que irá armazenar as informações do estoque
const stock = {
    items: [
      {
        name: "Produto 1",
        quantity: 10,
        price: 5.0
      },
      {
        name: "Produto 2",
        quantity: 5,
        price: 2.5
      }
    ],
  
    // Função que adiciona um novo item ao estoque
    addStock: function(name, quantity, price) {
      const item = {
        name: name,
        quantity: parseInt(quantity),
        price: parseFloat(price)
      };
  
      this.items.push(item);
    },
  
    // Função que atualiza as informações de um item existente no estoque
    updateStock: function(index, name, quantity, price) {
      const item = this.items[index];
  
      item.name = name;
      item.quantity = parseInt(quantity);
      item.price = parseFloat(price);
    },
  
    // Função que remove um item do estoque
    removeStock: function(index) {
      this.items.splice(index, 1);
    },
  
    // Função que atualiza a tabela HTML de acordo com as informações do estoque
    renderStockTable: function() {
      const tableBody = document.getElementById("stock-body");
  
      // Limpa o corpo da tabela antes de renderizar novamente
      tableBody.innerHTML = "";
  
      // Renderiza cada item do estoque como uma linha na tabela
      this.items.forEach((item, index) => {
        const row = document.createElement("tr");
  
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
  
        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;
  
        const priceCell = document.createElement("td");
        priceCell.textContent = item.price
        const actionsCell = document.createElement("td");

        // Botão para editar o item
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () => {
          // Preenche os campos do formulário de edição com as informações do item selecionado
          const nameField = document.getElementById("edit-product-name");
          const quantityField = document.getElementById("edit-product-quantity");
          const priceField = document.getElementById("edit-product-price");
      
          nameField.value = item.name;
          quantityField.value = item.quantity;
          priceField.value = item.price;
      
          // Armazena o índice do item selecionado em um atributo customizado do botão
          editButton.setAttribute("data-index", index);
        });
        actionsCell.appendChild(editButton);
      
        // Botão para remover o item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", () => {
          // Remove o item selecionado do estoque
          this.removeStock(index);
      
          // Atualiza a tabela HTML
          this.renderStockTable();
        });
        actionsCell.appendChild(removeButton);
      
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(actionsCell);
      
        tableBody.appendChild(row);
      });
    }}