const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const navDots = document.getElementById("navDots");

let currentSlide = 0;

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
