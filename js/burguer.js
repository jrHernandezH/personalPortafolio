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
let button = document.getElementById('contact');

button.addEventListener('click', () => {
    toggleMenu();
    desmarcar();
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
        desmarcar();
    });
});

// Mantén el resto del código existente
let burgerMenu = document.getElementById('burguer-menu');
burgerMenu.addEventListener('click', toggleMenu);

// Obtener elementos del DOM
const openButton = document.getElementById('contact');
const closeButton = document.getElementById('closeFormButton');
const overlay = document.getElementById('overlay');
const formContainer = document.getElementById('formContainer');

// Abrir formulario
openButton.addEventListener('click', function () {
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
        formContainer.classList.add('open');
    }, 50);
});

// Cerrar formulario
closeButton.addEventListener('click', function () {
    overlay.style.opacity = '0';
    formContainer.classList.remove('open');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 600);
});

const downloadButton = document.getElementById('Cv');

downloadButton.addEventListener('click', function () {
    const pdfUrl = './source/archivos/miCv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'HugoHernandezCv.pdf';
    link.target = '_blank';
    link.click();
});

