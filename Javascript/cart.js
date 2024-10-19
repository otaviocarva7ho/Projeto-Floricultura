const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.getElementById('cart-items');

if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
} else {
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
            <p>Produto: ${item.name}</p>
            <p>Preço: ${item.price} R$</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function clearCart() {
    localStorage.removeItem('cartItems'); // Remove os itens do armazenamento local
    document.getElementById('cart-items').innerHTML = '<p>Seu carrinho está vazio.</p>'; // Atualiza a página
    document.getElementById('cart-count').innerText = '0'; // Atualiza o número de itens no ícone da sacola
}
