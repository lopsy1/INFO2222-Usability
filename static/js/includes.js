async function loadContent(query, path) {
    const response = await fetch(path);
    const body = await response.text();
    document.querySelector(query).innerHTML = body;
}

// loadContent("nav", "/static/includes/navBar.html");
// loadContent("footer", "/static/includes/footerBar.html");

if (username) {
    document.querySelector("#nav-logged-out").style.display = "none";
    document.querySelector("#nav-logged-in").style.display = "";
    document.querySelectorAll(".username-text").forEach(
        i => i.innerHTML = username
    );
} else {
    document.querySelector("#nav-logged-in").style.display = "none";
    document.querySelector("#nav-logged-out").style.display = "";
}

function switch_function()
{
    let theme = localStorage.getItem("theme");
    if( theme == "dark")
    {
        localStorage.setItem("theme", "light");
        change_theme_light();
    }

    else 
    {
        localStorage.setItem("theme", "dark")
        change_theme_dark();
    }
}

/* https://stackoverflow.com/a/70914757 */
window.addEventListener("DOMContentLoaded", () => { 
let theme = localStorage.getItem("theme");
if (theme === "dark") {
  change_theme_dark_loaded();
} else {
  change_theme_light_loaded();
}
});


/* Light mode style changes */
function change_theme_light() {

/* Changes main color */
document.documentElement.style.setProperty("--color-prm-0", "#")
document.querySelector("main").style.backgroundColor = "#f9f9f9";
document.querySelector("main").style.border = "5px solid #c1c1c1";

/* Changes nav color */
document.querySelector("nav").style.backgroundColor = "#ffffff";

document.querySelector("main").style.transitionDuration = "1s";
document.querySelector("nav").style.transitionDuration = "1s";
document.documentElement.style.setProperty("transition-duration", "1s")

// Change button hover color
// document.getElementsByName("ul a:hover").style.backgroundColor = "#f9f9f9"
}

/* same as above but instantly loads instead of transition */

function change_theme_light_loaded() {

    /* Changes main color */
    document.documentElement.style.setProperty("--color-prm-0", "#")
    document.querySelector("main").style.backgroundColor = "#f9f9f9";
    document.querySelector("main").style.border = "5px solid #c1c1c1";
    
    /* Changes nav color */
    document.querySelector("nav").style.backgroundColor = "#ffffff";
    
    document.querySelector("main").style.transitionDuration = "0s";
    document.querySelector("nav").style.transitionDuration = "0s";
    document.documentElement.style.setProperty("transition-duration", "0s")
    // Change button hover color
    // document.getElementsByName("ul a:hover").style.backgroundColor = "#f9f9f9"
    }

/* Dark mode style changes */
function change_theme_dark() {
/* Changes main color */
document.documentElement.style.setProperty("--color-prm-0", "#1a1a1a")
document.querySelector("main").style.backgroundColor = "#3a3a3a"; 
document.querySelector("main").style.border = "5px solid #292929";

/* Changes nav color */
document.querySelector("nav").style.backgroundColor = "#3b3b3b";

document.querySelector("main").style.transitionDuration = "1s";
document.querySelector("nav").style.transitionDuration = "1s";
document.documentElement.style.setProperty("transition-duration", "1s")

// Change button hover color
// document.getElementsByName("ul a:hover").style.backgroundColor = "#3a3a3a"
}

/* same as above but instantly loads instead of transition */
function change_theme_dark_loaded() {
    /* Changes main color */
    document.documentElement.style.setProperty("--color-prm-0", "#1a1a1a")
    document.querySelector("main").style.backgroundColor = "#3a3a3a"; 
    document.querySelector("main").style.border = "5px solid #292929";
    
    /* Changes nav color */
    document.querySelector("nav").style.backgroundColor = "#3b3b3b";

    document.querySelector("main").style.transitionDuration = "0s";
    document.querySelector("nav").style.transitionDuration = "0s";
    document.documentElement.style.setProperty("transition-duration", "0s")
    
    // Change button hover color
    // document.getElementsByName("ul a:hover").style.backgroundColor = "#3a3a3a"
    }