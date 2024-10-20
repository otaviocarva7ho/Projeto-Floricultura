const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Inicializa o valor total
let totalPrice = 0;

// Verifica se o carrinho está vazio
// Verifica se o carrinho está vazio
if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
} else {
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item'); // Adiciona a classe de estilo

        // Exibe os detalhes do produto e a imagem alinhada à direita
        itemElement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <p>Produto: ${item.name}</p>
                    <p>Preço: ${item.price} R$</p>
                </div>
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto; margin-left: 20px;">
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);

        // Soma o preço dos itens ao total
        totalPrice += parseFloat(item.price);
    });

    // Exibe o valor total do carrinho
    cartTotalElement.innerText = `Total: ${totalPrice.toFixed(2)} R$`;
}



function clearCart() {
    localStorage.removeItem('cartItems');
    document.getElementById('cart-items').innerHTML = '<p>Seu carrinho está vazio.</p>';
    document.getElementById('cart-count').innerText = '0';
    document.getElementById('cart-total').innerText = 'Total: 0 R$';
}
