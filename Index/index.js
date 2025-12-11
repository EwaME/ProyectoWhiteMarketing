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

function addInfiniteLoop(trackId) {
        const track = document.querySelector(trackId);
        if(track) {
            const items = Array.from(track.children);
            items.forEach(item => {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', true); // Accesibilidad
                track.appendChild(clone);
            });
        }
    }

    // Aplicar a las marcas
    // NOTA: En tu HTML tienes .brands-Logos, asegúrate de que sea fácil de seleccionar.
    // Te sugiero añadirle un ID o usar la clase:
    const brandsContainer = document.querySelector('.brands-Logos');
    if(brandsContainer) {
        const brandsItems = Array.from(brandsContainer.children);
        brandsItems.forEach(item => {
                const clone = item.cloneNode(true);
                brandsContainer.appendChild(clone);
        });
    }

    // Aplicar a las galerías derecha e izquierda
    addInfiniteLoop('#track-derecha');
    addInfiniteLoop('#track-izquierda');

