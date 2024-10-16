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
                