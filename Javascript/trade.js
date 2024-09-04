var imgatual = "img/celebration.png";
var imgafter = "img/Gift card-pana.png";

function show() {

    document.getElementById('figura').src = imgatual;
    let aux = imgatual;
    imgatual = imgafter;
    imgafter = aux;


    var messageDiv = document.getElementById('messageDiv');
    if (messageDiv.style.display === 'none') {
        messageDiv.style.display = 'block';
    } else {
        messageDiv.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('showMessageBtn');
    button.addEventListener('click', show);
});
