(() => {
  const deck = document.getElementById("deck");
  const slides = deck.querySelectorAll(".slide");
  const total = slides.length;
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const current = document.getElementById("current");
  const totalEl = document.getElementById("total");
  let idx = 0;

  totalEl.textContent = total;

  const render = () => {
    deck.style.transform = `translateX(-${idx * 100}vw)`;
    current.textContent = idx + 1;
    prev.disabled = idx === 0;
    next.disabled = idx === total - 1;
  };

  const go = (n) => {
    idx = Math.max(0, Math.min(total - 1, n));
    render();
  };

  prev.addEventListener("click", () => go(idx - 1));
  next.addEventListener("click", () => go(idx + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(idx + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(idx - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(total - 1); }
  });

  let touchX = null;
  document.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) go(dx < 0 ? idx + 1 : idx - 1);
    touchX = null;
  });

  render();
})();
