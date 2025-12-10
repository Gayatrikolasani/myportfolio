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
