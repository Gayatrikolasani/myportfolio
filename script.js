// ======================================================
// THEME TOGGLE
// ======================================================
const body = document.body;
const themeToggleBtn = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("gk-theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
} else {
  body.classList.remove("dark-theme");
  if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
}

// Click to toggle
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-theme");
    localStorage.setItem("gk-theme", isDark ? "dark" : "light");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
}

// ======================================================
// MOBILE NAV TOGGLE
// ======================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}
