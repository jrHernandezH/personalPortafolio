const progressBars = [
    { bar: 'html', percentage: 70 },
    { bar: 'css', percentage: 70 },
    { bar: 'javaScript', percentage: 70 },
    { bar: 'react', percentage: 40 },
    { bar: 'bootstrap', percentage: 30 },
];

progressBars.forEach(progress => {
    const barElement = document.getElementById(progress.bar);
    const percentageElement = document.getElementById(`${progress.bar}-porcentaje`);
    cambiarAnchoLineOrange(barElement, percentageElement, progress.percentage);
});

function cambiarAnchoLineOrange(barElement, percentageElement, percentage) {
    const porcentaje = percentage + '%';
    barElement.style.width = porcentaje;
    percentageElement.textContent = porcentaje;
}
const tt = document.getElementById('tt');
const lin = document.getElementById('lin');
const fac = document.getElementById('fac');
const ins = document.getElementById('ins');

tt.addEventListener('click', function () {
    window.open('https://twitter.com/HugoHer92030069');
});
lin.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/hern%C3%A1ndez-flores-hugo-062a25245/');
});
fac.addEventListener('click', function () {
    window.open('https://www.facebook.com/hugo.hernandes.7399?mibextid=ZbWKwL');
});
ins.addEventListener('click', function () {
    window.open('https://www.instagram.com/hernandez_hugo_c/?igshid=MzNlNGNkZWQ4Mg');
});