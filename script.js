// ===== Welcome overlay =====
const welcomeOverlay = document.getElementById("welcomeOverlay");
const enterBtn = document.getElementById("enterBtn");

if (enterBtn && welcomeOverlay) {
  enterBtn.addEventListener("click", () => {
    welcomeOverlay.classList.add("hidden");
  });
}

// ===== Theme toggle =====
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme if available
const savedTheme = localStorage.getItem("gk-theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    themeIcon.textContent = "☀️";
  } else {
    themeIcon.textContent = "🌙";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", next);
    themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
    localStorage.setItem("gk-theme", next);
  });
}

// ===== Scroll reveal for .slide-up cards =====
const revealElements = document.querySelectorAll(".slide-up");

const observerOptions = {
  threshold: 0.18
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);
revealElements.forEach((el) => observer.observe(el));

// ===== Footer year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
