/* ============================
   MOBILE NAV TOGGLE
============================ */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* ============================
   THEME SWITCHER
============================ */
const themeToggle = document.getElementById("themeToggle");

// Restore saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark-theme");
  themeToggle.textContent = "☀️"; // Sun icon for dark mode
} else {
  themeToggle.textContent = "🌙"; // Moon icon for light mode
}

// Theme toggle click
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark-theme");

  if (isDark) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
