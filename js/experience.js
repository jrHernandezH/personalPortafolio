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