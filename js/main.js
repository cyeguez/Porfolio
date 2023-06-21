
const nav = document.querySelector(".nav");
const menu = document.getElementById("menu");

const toggle = () => {
  
  menu.classList.toggle("rotate");
  nav.classList.toggle("mostrar");
}

menu.addEventListener("click", toggle);
