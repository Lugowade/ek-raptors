// Lista de diapositivas con extensión corregida a .jpeg
const slides = [
    "img/diapositiva1.jpeg", 
    "img/diapositiva2.jpeg", 
    "img/diapositiva3.jpeg"
];

let currentIndex = 0;
const slideElement = document.getElementById("current-slide");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

function updateSlide() {
    // Efecto visual de desvanecimiento suave al cambiar
    slideElement.style.opacity = 0;
    
    setTimeout(() => {
        slideElement.src = slides[currentIndex];
        slideElement.style.opacity = 1;
    }, 300); 
}

btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});