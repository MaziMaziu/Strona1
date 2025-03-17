// Kod do obsługi slideshowa
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Funkcja do inicjalizacji slideshowa
function initSlideshow() {
    if (slides.length === 0) return;
    
    // Ukryj wszystkie slajdy oprócz pierwszego
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[0].style.display = "block";
    
    // Zaznacz pierwszy dot jako aktywny
    if (dots.length > 0) {
        dots[0].className += " active";
    }
    
    // Dodaj obsługę przycisków
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
}

// Funkcja do zmiany slajdów
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funkcja do pokazania konkretnego slajdu
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Główna funkcja pokazująca slajdy
function showSlides(n) {
    let i;
    
    // Sprawdź zakres indeksu
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Ukryj wszystkie slajdy
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Usuń klasę active ze wszystkich kropek
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Pokaż aktualny slajd i zaznacz odpowiednią kropkę
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Automatyczne przewijanie slajdów
function autoSlide() {
    plusSlides(1);
}

// Uruchom slideshow po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    // Automatyczne przewijanie co 5 sekund
    setInterval(autoSlide, 5000);
});