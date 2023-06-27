function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');

}
function desmarcar() {
    let hambuguer = document.getElementById('burguer-menu');
    hambuguer.checked = false;
}
// Agrega un listener a todos los elementos <a> del menú
let menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
        desmarcar();
    });
});

// Mantén el resto del código existente
let burgerMenu = document.getElementById('burguer-menu');
burgerMenu.addEventListener('click', toggleMenu);
