const burgerIcon = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger');

const menuBurger = () => {
    menu.classList.toggle('show-menu');
}

burgerIcon.addEventListener('click', menuBurger);
