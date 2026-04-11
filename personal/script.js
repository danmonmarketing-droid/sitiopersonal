// Daniel Montoya — sitio personal
// Interacción mínima: header sticky, reveal on scroll, año dinámico.

(function () {
  "use strict";

  // ---------- Año dinámico en el footer ----------
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ---------- Header: cambia de estado al hacer scroll ----------
  const header = document.querySelector("[data-header]");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Reveal on scroll (sutil, una sola vez) ----------
  const targets = document.querySelectorAll(
    ".section__header, .hero, .two-col__left, .two-col__right, .card, .step, .contact"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("is-visible"));
  }
})();
