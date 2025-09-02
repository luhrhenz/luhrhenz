// DOM Elements
// get the toggle button
let themeToggle = document.getElementById("themeToggle");

// when i click the button it will change the theme
themeToggle.onclick = function() {
    let body = document.body;
    
    // check if dark mode is on
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        
        // change the icon
        let icon = themeToggle.querySelector("i");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        
        let icon = themeToggle.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
};

// load the theme when page reloads
window.onload = function() {
    let theme = localStorage.getItem("theme");
    
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        
        let icon = themeToggle.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
};