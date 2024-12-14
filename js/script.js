const menuToggle = document.querySelector('.menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');

// Agregar evento para alternar el menú
menuToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

/* validaciones formulario */

document.getElementById("form-inscripcion").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  // Validación de nombre (no vacío)
  if (nombre.trim() === "") {
      alert("Por favor, ingresa tu nombre completo.");
      return;
  }

  // Validación de correo electrónico (formato correcto)
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
  }

  // Validación de mensaje (no vacío)
  if (mensaje.trim() === "") {
      alert("Por favor, escribe tu mensaje.");
      return;
  }

  // Si todo es válido, puedes enviar el formulario
  alert("Formulario enviado correctamente.");
  // Aquí puedes hacer algo como enviar el formulario con AJAX, etc.
  // this.submit(); // Descomenta esta línea si deseas enviar el formulario
});
