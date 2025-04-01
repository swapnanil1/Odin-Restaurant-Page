import "./style.css";
import homepage from "./tabbedPages/home";
import menu from "./tabbedPages/menu";
import contact from "./tabbedPages/contact";
import about from "./tabbedPages/about";
function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}
// setup events
document.getElementById("home").addEventListener("click", () => {
  clearContent();
  homepage();
});
document.getElementById("menu").addEventListener("click", () => {
  clearContent();
  menu();
});
document.getElementById("contact").addEventListener("click", () => {
  clearContent();
  contact();
});
document.getElementById("about").addEventListener("click", () => {
  clearContent();
  about();
});
homepage();
