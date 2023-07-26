const home = document.getElementById("home");
const nav = document.querySelector(".nav");
const menu = document.getElementById("menu");
const closeIcon = document.querySelector("#close-icon");
const navLink = document.querySelectorAll("nav a[href^='#']");
let activePage = window.location.href;



const toggleMenu = () => {
  menu.classList.toggle("rotate");
  nav.classList.toggle("hidden");
  
};


  navLink.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove('hidden');
    });
  });



  




menu.addEventListener("click", toggleMenu);

closeIcon.addEventListener("click", toggleMenu);
// nav.addEventListener("click", active);
