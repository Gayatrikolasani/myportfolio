/* ===========================
   MOBILE MENU TOGGLE
=========================== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* ===========================
   THEME SWITCHER
=========================== */

// Buttons
const themeBtn = document.getElementById("themeToggle");

// Load saved theme on refresh
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "☀️"; // Sun icon for light mode toggle
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // If dark mode is ON
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";  // Sun icon
    localStorage.setItem("theme", "dark");
  } 
  // If dark mode is OFF
  else {
    themeBtn.textContent = "🌙"; // Moon icon
    localStorage.setItem("theme", "light");
  }
});
const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-theme");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");

    const isDark = document.documentElement.classList.contains("dark-theme");

    if (isDark) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});
