const element = document.getElementById("hamburger");
const nav = document.querySelector("#main-nav");

element.onclick = () => {
  if (element.classList.contains("x")) {
    element.classList.remove("x");
    nav.classList.remove("nav-active");
  } else {
    element.classList.add("x");
    nav.classList.add("nav-active");
  }
};
