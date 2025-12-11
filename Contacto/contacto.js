emailjs.init('3wG5uLEaQ08gb1rDH'); 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name.value || !email.value || !message.value) {
            alert('Por favor, completa todos los campos requeridos (*).');
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'; 

        const serviceID = 'default_service'; 
        const templateID = 'template_an4dm3b'; 
        
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                successMessage.textContent = '✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
                successMessage.style.display = 'block';
                form.reset(); 
            }, function(error) {
                successMessage.textContent = '❌ ¡Algo salió mal! Por favor, inténtalo de nuevo o contáctanos por WhatsApp.';
                successMessage.style.display = 'block';
                console.error('EmailJS Error:', error);
            })
            .finally(function() {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // setTimeout(() => {
                //     successMessage.style.display = 'none';
                // }, 7000);
            });
    });
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("show");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});