const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const navDots = document.getElementById("navDots");

function getInitialSlide() {
  const params = new URLSearchParams(window.location.search);
  const slideFromQuery = Number(params.get("slide"));
  const hashMatch = window.location.hash.match(/slide-(\d+)/);
  const slideFromHash = hashMatch ? Number(hashMatch[1]) : NaN;
  const requestedSlide = Number.isFinite(slideFromQuery) && slideFromQuery > 0
    ? slideFromQuery
    : slideFromHash;

  if (!Number.isFinite(requestedSlide) || requestedSlide < 1) {
    return 0;
  }

  return Math.min(requestedSlide - 1, slides.length - 1);
}

let currentSlide = getInitialSlide();

function buildDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "nav-dot";
    dot.setAttribute("aria-label", `Ir al slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    navDots.appendChild(dot);
  });
}

function updateSlides() {
  slides.forEach((slide, index) => {
    const isActive = index === currentSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  Array.from(navDots.children).forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentSlide);
  });

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;

  const url = new URL(window.location.href);
  url.hash = `slide-${currentSlide + 1}`;
  window.history.replaceState({}, "", url);
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length || index === currentSlide) {
    return;
  }

  currentSlide = index;
  updateSlides();
}

prevButton.addEventListener("click", () => goToSlide(currentSlide - 1));
nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    goToSlide(currentSlide + 1);
  }

  if (event.key === "ArrowLeft") {
    goToSlide(currentSlide - 1);
  }
});

buildDots();
updateSlides();
