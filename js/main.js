
const nav = document.querySelector(".nav");
const menu = document.getElementById("menu");
const closeIcon = document.querySelector("#close-icon");

console.log(closeIcon);

const toggle = () => {
  
  menu.classList.toggle("rotate");
  nav.classList.toggle("mostrar");
}

const prueba = () => {console.log('click')}

function mensaje(){
  console.log("click");

}
menu.addEventListener("click", toggle);
closeIcon.addEventListener("click", toggle);

