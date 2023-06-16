const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

const menuBurger = () => {
    menu.classList.toggle('show-menu');
}

burgerIcon.addEventListener('click', menuBurger);
