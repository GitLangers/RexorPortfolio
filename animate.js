const el = document.getElementById('animated-text');
const text = el.textContent;

el.innerHTML = text.split('').map(char => {
  return `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`;
}).join('');

const spans = el.querySelectorAll('.char');
spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.1}s`;
});

const profilePic = document.getElementById('profile-pic');
const images = ['profile1.jpg', 'profile2.jpg', 'profile3.jpg'];
let currentImage = 0;

profilePic.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  profilePic.src = images[currentImage];
});


