document.addEventListener('DOMContentLoaded', function () {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const pixForm = document.getElementById('pix-form');
    const cardForm = document.getElementById('card-form');
    const cardContainer = document.querySelector('.card-container');
    const cvvInput = document.querySelector('.cvv-input'); 

    paymentMethods.forEach((method) => {
        method.addEventListener('change', function () {
            if (this.value === 'pix') {
                pixForm.style.display = 'block';
                cardForm.style.display = 'none';
                cardContainer.style.transform = 'rotateY(0deg)'; 
            } else {
                pixForm.style.display = 'none';
                cardForm.style.display = 'block';
                cardContainer.style.transform = 'rotateY(0deg)'; 
            }
        });
    });

    const copyPixKeyButton = document.getElementById('copy-pix-key');
    const pixKey = document.getElementById('pix-key').innerText;

    copyPixKeyButton.addEventListener('click', function () {
        navigator.clipboard.writeText(pixKey)
            .then(() => {
                alert('Chave Pix copiada para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar a chave Pix: ', err);
            });
    });

    function formatarNumero(input) {
        let valor = input.value.replace(/\D/g, '');
        valor = valor.replace(/(.{4})/g, '$1 '); 
        input.value = valor.trim();
        
        document.querySelector('.card-number-box').innerText = valor || '#### #### #### ####';
    }

    document.querySelector('.card-number-input').oninput = () => {
        formatarNumero(document.querySelector('.card-number-input'));
    }

    document.querySelector('.card-holder-input').oninput = () => {
        document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value || 'Nome do titular';
    }

    document.querySelector('.month-input').onchange = () => {
        document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value || 'Mês';
    }

    document.querySelector('.year-input').onchange = () => {
        document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value || 'Ano';
    }

    cvvInput.onmouseenter = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }

    cvvInput.onmouseleave = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }

    cvvInput.oninput = () => {
        document.querySelector('.cvv-box').innerText = cvvInput.value || 'CVC';
    }
});
