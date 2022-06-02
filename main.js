var menu = document.querySelector("menu");
var nav = document.querySelector("nav");
let items = document.querySelector(".return");
var loader = document.querySelector("#loader");
let vtview = window.innerWidth;
let hrview = window.innerHeight;
let main = document.querySelector("main");
let child = document.querySelector(".child");
window.onload = function() {
    main.appendChild(child)
}
function pageSystem() {
    let container = document.querySelector(".container");
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    if (container.scrollTop > 440) {
        header.className = "header";
        main.style.overflow = "scroll";
        main.style.paddingTop = "20px";

    } else if (container.scrollTop < 300) {
        header.className = "";
        main.style.overflow = "hidden";
    }
}
menu.addEventListener("click", function() {
    nav.style.left = "0%";
});
function closeNav(n) {
    nav.style.left = "-90%";
    switch (n) {
        case 1:
            location.replace("http://portal.ncnd.telenor.com.mm/nc/");
            break;

        case 2:
            location.replace("https://www.telenor.com.mm/my/personal/astrology");
            break;
        case 3:
            location.replace("https://www.telenor.com.mm/my/personal/gaming-and-entertainment");
            break;
        case 4:
            location.replace("https://www.telenor.com.mm/my/about");
            break;
        case 5:
            location.replace("https://www.telenor.com.mm/my/about/sustainability");
            break;
        case 6:
            location.replace("https://www.telenor.com.mm/my/about/media-home");
            break
        case 9:
            location.replace("ContactUs.html");
            break;
    }
    if (n > 0) {
        loader.innerText = "connecting...";
        loader.className = "loader";
    }
}
function lens() {
    location.replace("https://www.search_items.html");
}
