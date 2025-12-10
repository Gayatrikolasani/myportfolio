/* ============================
   MOBILE NAVIGATION
============================ */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ============================
   THEME SWITCHER
============================ */
const themeToggle = document.getElementById("themeToggle");

function applyTheme() {
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

applyTheme();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  applyTheme();
});
