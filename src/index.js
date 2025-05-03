import "./styles.css";
import homePage from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
import home from "./home.js";
console.log("hi")

const rootEl = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");


function clearRoot(rootEl) {
    rootEl.innerHTML = '';
}
function clearButton() {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
}


homeButton.addEventListener("click", () => {
    clearRoot(rootEl);
    clearButton();
    homeButton.classList.add("active");
    homePage(rootEl);
});

menuButton.addEventListener("click", () => {
    clearRoot(rootEl);
    clearButton();
    menuButton.classList.add("active");
    menu(rootEl);
});

contactButton.addEventListener("click", () => {
    clearRoot(rootEl);
    clearButton();
    contactButton.classList.add("active");
    contact(rootEl);
});

homeButton.click();