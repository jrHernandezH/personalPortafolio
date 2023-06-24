
function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', toggleMenu);
let exit = document.querySelector('.exit');
exit.addEventListener('click', toggleMenu);
