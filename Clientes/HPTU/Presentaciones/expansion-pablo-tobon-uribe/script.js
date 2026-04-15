const presentation = document.getElementById('presentation');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');
const counter      = document.getElementById('navCounter');

const slides = document.querySelectorAll('.slide');
const total  = slides.length;
let current  = 0;

function goTo(n) {
  current = Math.max(0, Math.min(n, total - 1));
  presentation.style.transform = `translateX(-${current * 100}vw)`;
  counter.textContent = `${current + 1} / ${total}`;
}

// Teclado
prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
});

// Touch / swipe
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  // Solo procesar si el swipe es más horizontal que vertical
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx < 0) goTo(current + 1);
    else        goTo(current - 1);
  }
}, { passive: true });

goTo(0);
