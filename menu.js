// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navUl = document.querySelector('nav ul');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function(event) {
      event.stopPropagation(); // Zapobiega propagacji zdarzenia kliknięcia
      navUl.classList.toggle('show');
    });
  }
  
  // Zamykanie menu po kliknięciu na link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navUl.classList.remove('show');
      }
    });
  });
  
  // Zamykanie menu po kliknięciu poza menu
  document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('nav');
    if (!isClickInside && navUl.classList.contains('show')) {
      navUl.classList.remove('show');
    }
  });
});
