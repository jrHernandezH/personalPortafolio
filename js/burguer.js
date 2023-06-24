function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Agrega un listener a todos los elementos <a> del menú
let menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Mantén el resto del código existente
let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', toggleMenu);
let exit = document.querySelector('.exit');
exit.addEventListener('click', toggleMenu);