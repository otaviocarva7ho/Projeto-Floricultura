const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');


let totalPrice = 0;


if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
} else {
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

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


        totalPrice += parseFloat(item.price);
    });


    cartTotalElement.innerText = `Total: ${totalPrice.toFixed(2)} R$`;

}



function clearCart() {
    localStorage.removeItem('cartItems');
    document.getElementById('cart-items').innerHTML = '<p>Seu carrinho está vazio.</p>';
    document.getElementById('cart-count').innerText = '0';
    document.getElementById('cart-total').innerText = 'Total: 0 R$';
}
