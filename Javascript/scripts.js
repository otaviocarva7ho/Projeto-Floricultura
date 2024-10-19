const navbar = document.querySelector(".navbar");
        const  menuButton = document.querySelector(".menu-button");

                menuButton.addEventListener("click", () => {
                navbar.classList.toggle("show-menu");
                });

                class Carosel {
                    constructor(conteiner, itens, controls) {
                        this.caroselConteiner = conteiner;
                        this.caroselControl = controls;
                        this.caroselArray = [...itens];
                        this.setControls(); // Chame este método no construtor
                        this.useControls();  // Chame este método no construtor
                    }
                
                    updateCarousel() {
                        this.caroselArray.forEach(el => {
                            el.classList.remove('img-item-1', 'img-item-2', 'img-item-3', 'img-item-4', 'img-item-5');
                        });
                
                        this.caroselArray.slice(0, 5).forEach((el, i) => {
                            el.classList.add(`img-item-${i + 1}`);
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
                        const controls = ['previous', 'next']; // Defina os controles aqui
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
                
                // Inicialize o carrossel
                const caroselConteiner = document.querySelector('.carosel-conteiner');
                const caroselItens = document.querySelectorAll('.img-item');
                const caroselControl = document.querySelector('.control'); // Selecione o contêiner de controle
                
                const exCarousel = new Carosel(caroselConteiner, caroselItens, caroselControl);
                
                
                                        // Adiciona um evento de clique a todos os botões "Adicionar a sacola!"
        const addToCartButtons = document.querySelectorAll('.add-sacola')
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productElement = button.closest('.product');
                const productName = productElement.getAttribute('data-name');
                const productPrice = productElement.getAttribute('data-price');
                const productImage = productElement.getAttribute('data-image')
                
                addToCart(productName, productPrice, productSize, productColor);
            });
        });


                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                function addToCart(productId, productName, productPrice,productImage) {
                    const item = {
                        id: productId,
                        name: productName,
                        price: productPrice,
                        Image: productImage
                    };
                
                    cartItems.push(item);
                
                    document.getElementById('cart-count').innerText = cartItems.length;
                
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    alert('Produto adicionado à sacola!');
                }

                document.querySelectorAll('.add-sacola').forEach(button => {
                    button.addEventListener('click', function () {
                    
                        const productElement = this.closest('.product');
                    
                        const productId = productElement.getAttribute('data-id');
                        const productName = productElement.getAttribute('data-name');
                        const productPrice = productElement.getAttribute('data-price');
                        const productImage = productElement.getAttribute('data-image');
                    
                    
                        addToCart(productId, productName, productPrice, productImage);
                    });
                });


                const cartItemsContainer = document.getElementById('cart-items');

                if (cartItems.length === 0) {
                    cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
                } else {
                    cartItems.forEach(item => {
                        const itemElement = document.createElement('div');
                        itemElement.innerHTML = `
                            <p>Produto: ${item.name}</p>
                            <p>Preço: ${item.price} R$</p>
                            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                        `;
                        cartItemsContainer.appendChild(itemElement);
                    });
                }

                