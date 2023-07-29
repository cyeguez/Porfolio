const menu = document.getElementById('menu');
const iconClose = document.getElementById('icon-close');
const nav = document.querySelector('.nav');
const menuLink= document.querySelectorAll('.nav__container a[href^="#"]');

console.log(menuLink);

const toogleMenu = ()=>{
  nav.classList.toggle('active-menu');
  
}

menuLink.forEach(link =>{
  link.addEventListener('click', ()=>{
    nav.classList.remove('active-menu')
  })
})

menu.addEventListener("click", toogleMenu);
iconClose.addEventListener("click", toogleMenu)