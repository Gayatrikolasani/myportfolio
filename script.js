// ---------------------------------------------------------
//  THEME SWITCHER (LIGHT <-> DARK) WITH ICON + SAVE MEMORY
// ---------------------------------------------------------

const themeBtn = document.getElementById("themeToggle");

// Load theme if previously saved
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️"; // sun icon
} else {
    themeBtn.textContent = "🌙"; // moon icon
}

// Toggle Theme
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update icon + save preference
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
