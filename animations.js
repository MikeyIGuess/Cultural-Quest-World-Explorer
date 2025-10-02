function createConfetti(x, y) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        
        // Random initial velocity
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        confetti.dataset.vx = Math.cos(angle) * velocity;
        confetti.dataset.vy = Math.sin(angle) * velocity - 2;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 2000);
    }
}

function animateConfetti() {
    const confetti = document.getElementsByClassName('confetti');
    for (let c of confetti) {
        const x = parseFloat(c.style.left);
        const y = parseFloat(c.style.top);
        c.dataset.vy = parseFloat(c.dataset.vy) + 0.1; // Gravity
        c.style.left = (x + parseFloat(c.dataset.vx)) + 'px';
        c.style.top = (y + parseFloat(c.dataset.vy)) + 'px';
        c.style.transform = `rotate(${x}deg)`;
    }
    requestAnimationFrame(animateConfetti);
}

function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
} 