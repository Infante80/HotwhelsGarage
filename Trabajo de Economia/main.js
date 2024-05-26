const galeriaContainer = document.querySelector('.galeria-container');
const galerias = document.querySelectorAll('.galeria');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showGaleria(index) {
    galerias.forEach(galeria => galeria.classList.remove('active'));
    galerias[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galerias.length) % galerias.length;
    showGaleria(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galerias.length;
    showGaleria(currentIndex);
});

showGaleria(currentIndex);

