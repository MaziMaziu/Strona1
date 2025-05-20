// Prosta obsługa lightbox dla galerii
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox .close');

    images.forEach(img => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxCaption.textContent = '';
        }
    });
});
