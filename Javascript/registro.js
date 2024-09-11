const form = document.querySelector('form#form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('span.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const submitBtn = document.getElementById('submitBtn');

function setError(index) {
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function sobrenomeValidate() {
    if (campos[1].value.length < 3) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[2].value)) {
        setError(2);
        return false;
    } else {
        removeError(2);
        return true;
    }
}

function cellValidate() {
    if (campos[3].value.length < 10) {
        setError(3);
        return false;
    } else {
        removeError(3);
        return true;
    }
}

function mainPasswordValidate() {
    if (campos[4].value.length < 8) {
        setError(4);
        return false;
    } else {
        removeError(4);
        return true;
    }
}

function comparePassword() {
    if (campos[4].value === campos[5].value && campos[5].value.length >= 8) {
        removeError(5);
        return true;
    } else {
        setError(5);
        return false;
    }
}

function validateField(index) {
    switch (index) {
        case 0: return nameValidate();
        case 1: return sobrenomeValidate();
        case 2: return emailValidate();
        case 3: return cellValidate();
        case 4: return mainPasswordValidate();
        case 5: return comparePassword();
        default: return false;
    }
}

campos.forEach((campo, index) => {
    campo.addEventListener('input', () => {
        validateField(index);
        for (let i = 0; i < campos.length; i++) {
            if (i !== index) {
                removeError(i);
            }
        }
    });
});

function validateForm() {
    let formIsValid = true;

    campos.forEach((campo, index) => {
        if (campo.value.trim() === '') {
            setError(index);
            formIsValid = false;
        } else {
            if (!validateField(index)) {
                formIsValid = false;
            }
        }
    });

    submitBtn.disabled = !formIsValid;
    return formIsValid;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let allValid = true;

    campos.forEach((campo, index) => {
        if (campo.value.trim() === '') {
            setError(index);
            allValid = false;
        } else {
            if (!validateField(index)) {
                allValid = false;
            }
        }
    });

    if (allValid) {
        window.location.href = '../pages/login.html';
    }
});
