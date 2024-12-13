const menuToggle = document.querySelector('.menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');

// Agregar evento para alternar el menú
menuToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});