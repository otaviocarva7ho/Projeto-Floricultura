var imgatual = "../img/celebration.png";
var imgafter = "../img/Gift card-pana.png";
var clickCount = 0;

function show() {
    clickCount++;

    if (clickCount === 2) {
        window.location.href = "../index.html";
        return;  
    }

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

function showCanvas() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('showMessageBtn');
    button.addEventListener('click', () => {
        show();
        showCanvas(); 
        createConfetti();
        drawConfetti();
    });
});

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
const confettiParticles = [];

function createConfetti() {
  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
  
  for (let i = 0; i < 200; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 5 - 2.5,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  confettiParticles.forEach(particle => {
    ctx.save();
    ctx.translate(particle.x + particle.width / 2, particle.y + particle.height / 2);
    ctx.rotate((particle.rotation * Math.PI) / 180);
    ctx.fillStyle = particle.color;
    ctx.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
    ctx.restore();
    
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    particle.rotation += particle.rotationSpeed;

    if (particle.y > canvas.height) {
      particle.y = -particle.height;
      particle.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}
