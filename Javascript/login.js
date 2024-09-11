const form = document.getElementById('login-form');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const spans = document.querySelectorAll('span.span-required');

function setError(index) {
    spans[index].style.display = 'block';
    if (index === 0) {
        usuario.style.border = '1px solid #e63636';
    } else if (index === 1) {
        senha.style.border = '1px solid #e63636';
    }
}

function removeError(index) {
    spans[index].style.display = 'none';
    if (index === 0) {
        usuario.style.border = '';
    } else if (index === 1) {
        senha.style.border = '';
    }
}

function usuarioValidate() {
    if (usuario.value.trim() === '') {
        setError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function senhaValidate() {
    if (senha.value.trim() === '') {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

usuario.addEventListener('input', usuarioValidate);
senha.addEventListener('input', senhaValidate);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (!usuarioValidate()) isValid = false;
    if (!senhaValidate()) isValid = false;

    if (isValid) {
        window.location.href = '../index.html';
    }
});
