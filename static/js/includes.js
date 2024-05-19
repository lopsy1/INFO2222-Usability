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

function lightMode() {
    document.documentElement.style.setProperty("--color-bg-0", "#fdfaf8");
    document.documentElement.style.setProperty("--color-prm-0", "#ce9a7c");
    document.documentElement.style.setProperty("--color-sec-0", "#addca8");
    document.documentElement.style.setProperty("--color-acc-0", "#57c985");
    document.documentElement.style.setProperty("--color-txt-0", "#140d07");
}

function darkMode() {
    document.documentElement.style.setProperty("--color-bg-0", "#080502");
    document.documentElement.style.setProperty("--color-prm-0", "#824e30");
    document.documentElement.style.setProperty("--color-sec-0", "#285823");
    document.documentElement.style.setProperty("--color-acc-0", "#37a965");
    document.documentElement.style.setProperty("--color-txt-0", "#f8f2ec");
}