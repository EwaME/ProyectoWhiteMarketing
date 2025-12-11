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
                clone.setAttribute('aria-hidden', true); 
                track.appendChild(clone);
            });
        }
    }


    const brandsContainer = document.querySelector('.brands-Logos');
    if(brandsContainer) {
        const brandsItems = Array.from(brandsContainer.children);
        brandsItems.forEach(item => {
                const clone = item.cloneNode(true);
                brandsContainer.appendChild(clone);
        });
    }

    addInfiniteLoop('#track-derecha');
    addInfiniteLoop('#track-izquierda');


    let logosContainer = document.querySelector('.brands-Logos');
let  logos = logosContainer.innerHTML; 
logosContainer.innerHTML += logos;     


logosContainer.addEventListener('mouseenter', () => {
logosContainer.style.animationPlayState = 'paused';
});
logosContainer.addEventListener('mouseleave', () => {
logosContainer.style.animationPlayState = 'running';
});




let trackDerecha = document.getElementById('track-derecha');
        let trackIzquierda = document.getElementById('track-izquierda');

        let filaDerecha = document.querySelector('.galeria-fila-derecha');
        let filaIzquierda = document.querySelector('.galeria-fila-izquierda');

        let duplicarContenido = (trackElement) => {
            if (trackElement && trackElement.innerHTML.trim() !== '') {
                let contenidoOriginal = trackElement.innerHTML;
            
                trackElement.innerHTML += contenidoOriginal;
            }
        };

    
        let configurarControl = (filaElement, trackElement) => {
            if (filaElement && trackElement) {
              
                filaElement.addEventListener('mouseenter', () => {
                    trackElement.style.animationPlayState = 'paused';
                });

            
                filaElement.addEventListener('mouseleave', () => {
                    trackElement.style.animationPlayState = 'running';
                });
            }
        };


        duplicarContenido(trackDerecha);
        configurarControl(filaDerecha, trackDerecha);


        duplicarContenido(trackIzquierda);
        configurarControl(filaIzquierda, trackIzquierda);