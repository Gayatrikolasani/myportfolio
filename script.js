// Theme toggle
const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  themeIcon.textContent = "☀️";
} else {
  body.classList.add("light-theme");
  themeIcon.textContent = "🌙";
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme", !isDark);
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => observer.observe(el));

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
