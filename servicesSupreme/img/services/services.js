let logosContainer = document.querySelector('.brands-Logos');
let  logos = logosContainer.innerHTML; // guarda el contenido original
logosContainer.innerHTML += logos;      // lo duplica

// Opcional: pausar al pasar el mouse
logosContainer.addEventListener('mouseenter', () => {
logosContainer.style.animationPlayState = 'paused';
});
logosContainer.addEventListener('mouseleave', () => {
logosContainer.style.animationPlayState = 'running';
});
