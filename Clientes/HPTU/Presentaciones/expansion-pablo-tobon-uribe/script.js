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

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
});

goTo(0);
