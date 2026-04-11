const slides = Array.from(document.querySelectorAll(".slide"));
const track = document.getElementById("slidesTrack");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slideCounter = document.getElementById("slideCounter");
const slideTitle = document.getElementById("slideTitle");
const progressFill = document.getElementById("progressFill");
const navDots = document.getElementById("navDots");

const distributionData = {
  mediocristan: [10, 11, 9, 10, 10, 9, 11, 10, 10, 10],
  extremistan: [1, 1, 1, 1, 1, 1, 1, 1, 1, 50],
};

const impactEvents = [2, 3, 2, 4, 3, 2, 3, 2, 4, 40];
const cumulativeImpact = impactEvents.reduce((acc, value) => {
  const previous = acc.length ? acc[acc.length - 1] : 0;
  acc.push(previous + value);
  return acc;
}, []);

let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

function formatIndex(value) {
  return String(value).padStart(2, "0");
}

function buildNavDots() {
  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-dot";
    button.setAttribute("aria-label", `Ir al slide ${index + 1}: ${slide.dataset.short}`);
    button.addEventListener("click", () => goToSlide(index));
    navDots.appendChild(button);
  });
}

function setTrackPosition() {
  track.style.transform = `translate3d(-${currentIndex * 100}vw, 0, 0)`;
}

function updateUI() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === currentIndex);
    if (index <= currentIndex) {
      slide.classList.add("was-visited");
    }
  });

  Array.from(navDots.children).forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
  });

  const activeSlide = slides[currentIndex];
  const progress = slides.length > 1 ? (currentIndex / (slides.length - 1)) * 100 : 0;

  document.body.dataset.navTheme = activeSlide.dataset.navTheme || "light";
  slideCounter.textContent = `${formatIndex(currentIndex + 1)} / ${formatIndex(slides.length)}`;
  slideTitle.textContent = activeSlide.dataset.short || `Slide ${currentIndex + 1}`;
  progressFill.style.width = `${progress}%`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  const hash = `#${activeSlide.id}`;
  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
}

function goToSlide(index) {
  const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
  if (boundedIndex === currentIndex) {
    return;
  }

  currentIndex = boundedIndex;
  setTrackPosition();
  updateUI();
  slides[currentIndex].focus({ preventScroll: true });
}

function syncFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) {
    currentIndex = 0;
    setTrackPosition();
    updateUI();
    return;
  }

  const hashIndex = slides.findIndex((slide) => slide.id === hash);
  currentIndex = hashIndex >= 0 ? hashIndex : 0;
  setTrackPosition();
  updateUI();
}

function createSvgElement(tagName, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, String(value));
  });
  return element;
}

function renderDistributionChart() {
  const container = document.getElementById("distributionChart");
  const svg = createSvgElement("svg", {
    viewBox: "0 0 900 420",
    class: "chart-svg",
    role: "img",
  });

  const maxValue = 50;
  const chartTop = 66;
  const chartHeight = 248;
  const panelWidth = 355;
  const panelGap = 80;
  const leftStart = 58;
  const rightStart = leftStart + panelWidth + panelGap;
  const baselineY = chartTop + chartHeight;
  const barWidth = 22;
  const barGap = 11;

  const titleOne = createSvgElement("text", {
    x: leftStart,
    y: 34,
    class: "chart-panel-title",
  });
  titleOne.textContent = "Mediocristán";

  const titleTwo = createSvgElement("text", {
    x: rightStart,
    y: 34,
    class: "chart-panel-title",
  });
  titleTwo.textContent = "Extremistán";

  const subtitleOne = createSvgElement("text", {
    x: leftStart,
    y: 52,
    class: "chart-small-label",
  });
  subtitleOne.textContent = "Valores parecidos, ningún caso domina";

  const subtitleTwo = createSvgElement("text", {
    x: rightStart,
    y: 52,
    class: "chart-small-label",
  });
  subtitleTwo.textContent = "Un solo caso concentra la mayor parte";

  svg.append(titleOne, titleTwo, subtitleOne, subtitleTwo);

  [0, 25, 50].forEach((value) => {
    const y = baselineY - (value / maxValue) * chartHeight;
    svg.appendChild(
      createSvgElement("line", {
        x1: leftStart - 16,
        y1: y,
        x2: rightStart + panelWidth + 12,
        y2: y,
        class: value === 0 ? "chart-axis" : "chart-gridline",
      }),
    );
    const label = createSvgElement("text", {
      x: 12,
      y: y + 4,
      class: "chart-small-label",
    });
    label.textContent = String(value);
    svg.appendChild(label);
  });

  const drawPanelBars = (values, panelStart, color) => {
    values.forEach((value, index) => {
      const height = (value / maxValue) * chartHeight;
      const x = panelStart + index * (barWidth + barGap);
      const y = baselineY - height;

      const bar = createSvgElement("rect", {
        x,
        y,
        width: barWidth,
        height,
        rx: 2,
        fill: color,
        class: "chart-bar",
        style: `--order:${index};`,
      });

      const label = createSvgElement("text", {
        x: x + barWidth / 2,
        y: baselineY + 20,
        "text-anchor": "middle",
        class: "chart-small-label",
      });
      label.textContent = `P${index + 1}`;

      const valueLabel = createSvgElement("text", {
        x: x + barWidth / 2,
        y: y - 10,
        "text-anchor": "middle",
        class: "chart-small-label",
      });
      valueLabel.textContent = String(value);

      svg.append(bar, label, valueLabel);
    });
  };

  drawPanelBars(distributionData.mediocristan, leftStart, "#676545");
  drawPanelBars(distributionData.extremistan, rightStart, "#9B4421");

  container.appendChild(svg);
}

function buildPath(points) {
  return points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");
}

function renderImpactChart() {
  const container = document.getElementById("impactChart");
  const svg = createSvgElement("svg", {
    viewBox: "0 0 900 420",
    class: "chart-svg",
    role: "img",
  });

  const chartTop = 52;
  const chartHeight = 270;
  const chartLeft = 70;
  const chartRight = 860;
  const chartWidth = chartRight - chartLeft;
  const baselineY = chartTop + chartHeight;
  const maxCumulative = Math.max(...cumulativeImpact);
  const step = chartWidth / (impactEvents.length - 1);
  const barWidth = 44;

  [0, 25, 50, 65].forEach((value) => {
    const y = baselineY - (value / maxCumulative) * chartHeight;
    svg.appendChild(
      createSvgElement("line", {
        x1: chartLeft,
        y1: y,
        x2: chartRight,
        y2: y,
        class: value === 0 ? "chart-axis" : "chart-gridline",
      }),
    );

    const label = createSvgElement("text", {
      x: 18,
      y: y + 4,
      class: "chart-small-label",
    });
    label.textContent = String(value);
    svg.appendChild(label);
  });

  svg.appendChild(
    createSvgElement("text", {
      x: chartLeft,
      y: 28,
      class: "chart-legend",
    }),
  ).textContent = "Barras: acumulado";

  svg.appendChild(
    createSvgElement("text", {
      x: chartLeft + 255,
      y: 28,
      class: "chart-legend",
    }),
  ).textContent = "Línea: tendencia acumulada";

  const areaPoints = [];
  const linePoints = cumulativeImpact.map((value, index) => {
    const x = chartLeft + index * step;
    const y = baselineY - (value / maxCumulative) * chartHeight;
    areaPoints.push([x, y]);
    return [x, y];
  });

  cumulativeImpact.forEach((value, index) => {
    const x = chartLeft + index * step - barWidth / 2;
    const height = (value / maxCumulative) * chartHeight;
    const y = baselineY - height;

    const bar = createSvgElement("rect", {
      x,
      y,
      width: barWidth,
      height,
      rx: 2,
      fill: index === impactEvents.length - 1 ? "#9B4421" : "#676545",
      class: "chart-bar",
      style: `--order:${index};`,
    });

    const xLabel = createSvgElement("text", {
      x: x + barWidth / 2,
      y: baselineY + 22,
      "text-anchor": "middle",
      class: "chart-small-label",
    });
    xLabel.textContent = `E${index + 1}`;

    const deltaLabel = createSvgElement("text", {
      x: x + barWidth / 2,
      y: baselineY + 38,
      "text-anchor": "middle",
      class: "chart-small-label",
    });
    deltaLabel.textContent = `+${impactEvents[index]}`;

    svg.append(bar, xLabel, deltaLabel);
  });

  const areaPath = createSvgElement("path", {
    d: `${buildPath(linePoints)} L ${chartRight} ${baselineY} L ${chartLeft} ${baselineY} Z`,
    class: "chart-area",
    fill: "#FEF3D9",
  });
  areaPath.style.opacity = "0.18";

  const linePath = createSvgElement("path", {
    d: buildPath(linePoints),
    class: "chart-line",
    stroke: "#FEF3D9",
  });

  svg.append(areaPath, linePath);

  linePoints.forEach(([x, y], index) => {
    const point = createSvgElement("circle", {
      cx: x,
      cy: y,
      r: index === linePoints.length - 1 ? 7 : 5,
      fill: index === linePoints.length - 1 ? "#9B4421" : "#FEF3D9",
      class: "chart-point",
      style: `--order:${index};`,
    });

    const label = createSvgElement("text", {
      x,
      y: y - 12,
      "text-anchor": "middle",
      class: "chart-small-label",
    });
    label.textContent = String(cumulativeImpact[index]);

    svg.append(point, label);
  });

  container.appendChild(svg);

  requestAnimationFrame(() => {
    const totalLength = linePath.getTotalLength();
    linePath.style.strokeDasharray = `${totalLength}`;
    linePath.style.strokeDashoffset = `${totalLength}`;
  });
}

function attachEvents() {
  prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      goToSlide(currentIndex + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      goToSlide(currentIndex - 1);
    }

    if (event.key === "Home") {
      goToSlide(0);
    }

    if (event.key === "End") {
      goToSlide(slides.length - 1);
    }
  });

  window.addEventListener("hashchange", syncFromHash);

  track.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
        goToSlide(currentIndex + (deltaX < 0 ? 1 : -1));
      }
    },
    { passive: true },
  );
}

buildNavDots();
renderDistributionChart();
renderImpactChart();
attachEvents();
syncFromHash();
