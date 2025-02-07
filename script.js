// Add floating hearts dynamically
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.width = Math.random() * 20 + 10 + 'px'; // Random size
    heart.style.height = heart.style.width;
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);