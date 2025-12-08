// Inicializar EmailJS (reemplaza con tu clave pública)
(function() {
    emailjs.init("TU_CLAVE_PUBLICA_EMAILJS");
})();

// Validaciones y envío
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpiar errores previos
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    // Validar nombre
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
        isValid = false;
    }

    // Validar email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Ingresa un correo electrónico válido.';
        isValid = false;
    }

    // Validar mensaje
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'El mensaje es obligatorio.';
        isValid = false;
    }

    if (!isValid) return;

    // Preparar datos para EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: message,
        to_email: 'tu_correo_destino@ejemplo.com' // Cambia esto al correo donde quieres recibir los mensajes
    };

    // Enviar email
    emailjs.send('TU_SERVICIO_ID', 'TU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('successMessage').textContent = '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.';
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('successMessage').textContent = 'Error al enviar el mensaje. Inténtalo de nuevo.';
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('successMessage').style.background = '#f8d7da';
            document.getElementById('successMessage').style.color = '#721c24';
        });
});