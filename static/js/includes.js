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