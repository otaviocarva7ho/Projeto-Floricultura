const navbar = document.querySelector(".navbar");
        const  menuButton = document.querySelector(".menu-button");

                menuButton.addEventListener("click", () => {
                navbar.classList.toggle("show-menu");
                });
                let imginicial = 0;
                const imagens = document.querySelectorAll('.imagens img');
                const totalImagens = imagens.length;
                const intervaloTroca = 7000;
                
                document.querySelector('.prev').addEventListener('click', () => {
                    imginicial = (imginicial - 1 + totalImagens) % totalImagens;
                    updateCarrossel();
                });
                
                document.querySelector('.next').addEventListener('click', () => {
                    imginicial = (imginicial + 1) % totalImagens;
                    updateCarrossel();
                });
                
                function updateCarrossel() {
                    const offset = -imginicial * 100; // Corrigir 'constoffset' para 'const offset' e ajustar o cálculo para negativo
                    document.querySelector('.imagens').style.transform = `translateX(${offset}%)`;
                }
                setInterval(proximaImagem, intervaloTroca);

                // Função para atualizar a imagem com base na largura da tela
                function atualizarImagem() {
                    const imgDefault = document.getElementById('img-default');
                    const imgPequena = document.getElementById('img-pequena');
                    const largura = window.innerWidth;
                
                    if (largura <= 768) {
                        // Exibir imagem pequena em telas menores
                        imgDefault.style.display = 'none';
                        imgPequena.style.display = 'block';
                    } else {
                        // Exibir imagem padrão em telas maiores
                        imgDefault.style.display = 'block';
                        imgPequena.style.display = 'none';
                    }
                }
                
                // Chama a função ao carregar a página
                atualizarImagem();
                
                // Adiciona um listener para redimensionamento da janela
                window.addEventListener('resize', atualizarImagem);
                