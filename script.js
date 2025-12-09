// THEME SWITCHER WITH ICON UPDATE
const themeBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️"; // Light icon
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙"; // Dark icon
        localStorage.setItem("theme", "light");
    }
});
