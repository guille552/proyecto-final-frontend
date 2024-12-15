document.addEventListener('DOMContentLoaded', function () {
  // Obtiene el botón del menú y el menú de navegación
  const menuToggle = document.getElementById('menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');

  // Event listener para manejar el clic en el botón de menú
  menuToggle.addEventListener('click', function () {
    navbarNav.classList.toggle('active'); // Alterna la clase "active" para mostrar/ocultar el menú
  });
});



/* validaciones formulario */

document.getElementById("form-inscripcion").addEventListener("submit", function (event) {
  event.preventDefault();

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
});


/* boton modal */

$(document).ready(function () {
  if ($(window).width() <= 2000) {
    setTimeout(function () {
      $('#promo-modal').fadeIn();
      $('body').css('overflow', 'hidden');
    }, 1000); // Se muestra después de 1 segundo
  }

  // Cerrar el modal al hacer clic en el botón de cerrar
  $('#close-btn').click(function () {
    $('#promo-modal').fadeOut();
    $('body').css('overflow', 'auto');
  });

  // Cerrar el modal si se hace clic fuera de la ventana del modal
  $(window).click(function (event) {
    if ($(event.target).is('#promo-modal')) {
      $('#promo-modal').fadeOut();
      $('body').css('overflow', 'auto');
    }
  });

  // Cerrar el modal con la tecla Esc
  $(document).keydown(function (event) {
    if (event.key === 'Escape') {
      $('#promo-modal').fadeOut();
      $('body').css('overflow', 'auto');
    }
  });
  // Acción cuando se presiona "Aplicar Ahora"
  $('#apply-now-btn').click(function () {
    alert('¡Gracias por aplicar! Te contactaremos pronto.');
    $('#promo-modal').fadeOut();
    $('body').css('overflow', 'auto');
  });
});