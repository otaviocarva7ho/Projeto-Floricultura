const navbar = document.querySelector(".navbar");
        const  menuButton = document.querySelector(".menu-button");

                menuButton.addEventListener("click", () => {
                navbar.classList.toggle("show-menu");
                });

                class Carosel {
                    constructor(conteiner, itens, controls, texto) {
                        this.caroselConteiner = conteiner;
                        this.caroselControl = controls;
                        this.caroselArray = [...itens];
                        this.caroselTexto = texto; // Novo atributo para o texto
                        this.setControls(); 
                        this.useControls();  
                        this.updateCarousel(); // Atualizar o texto no início
                    }
                    
                    updateCarousel() {
                        this.caroselArray.forEach(el => {
                            el.classList.remove('img-item-1', 'img-item-2', 'img-item-3', 'img-item-4', 'img-item-5');
                        });
                
                        this.caroselArray.slice(0, 5).forEach((el, i) => {
                            el.classList.add(`img-item-${i + 1}`);
                            // Atualizando o texto correspondente à imagem atual
                            if (i === 2) { // A imagem do meio
                                const img = el.querySelector('img');
                                const text = img.getAttribute('data-text') || 'Texto padrão para a imagem.';
                                this.caroselTexto.innerText = text;
                            }
                        });
                    }
                
                    setCurrentState(direction) {
                        if (direction.className.includes('previous')) {
                            this.caroselArray.unshift(this.caroselArray.pop());
                        } else {
                            this.caroselArray.push(this.caroselArray.shift());
                        }
                        this.updateCarousel();
                    }
                
                    setControls() {
                        const controls = ['previous', 'next']; 
                        controls.forEach(control => {
                            const button = document.createElement('button');
                            button.className = `control-${control}`;
                            button.innerText = control === 'previous' ? 'Anterior' : 'Próximo';
                            this.caroselControl.appendChild(button);
                        });
                    }
                
                    useControls() {
                        const triggers = document.querySelectorAll('.control button');
                        triggers.forEach(control => {
                            control.addEventListener('click', e => {
                                e.preventDefault();
                                this.setCurrentState(control);
                            });
                        });
                    }
                }
                
                // Selecionando o elemento de texto
                const caroselTexto = document.querySelector('.carosel-texto');
                
                const caroselConteiner = document.querySelector('.carosel-conteiner');
                const caroselItens = document.querySelectorAll('.img-item');
                const caroselControl = document.querySelector('.control'); 
                
                const exCarousel = new Carosel(caroselConteiner, caroselItens, caroselControl, caroselTexto);
                
                
                
const addToCartButtons = document.querySelectorAll('.add-sacola');


addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product'); 
        const productId = productElement.getAttribute('data-id'); 
        const productName = productElement.getAttribute('data-name'); 
        const productPrice = productElement.getAttribute('data-price'); 
        const productImg = productElement.getAttribute('data-image'); 

        
        console.log("ID:", productId);
        console.log("Nome:", productName);
        console.log("Preço:", productPrice);
        console.log("Imagem:", productImg); 
        
        addToCart(productId, productName, productPrice, productImg);
    });
});

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(productId, productName, productPrice, productImg) {
    console.log(productImg);
    const item = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImg 
    };
    
    cartItems.push(item);
    
    document.getElementById('cart-count').innerText = cartItems.length;
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Produto adicionado à sacola!');
}
