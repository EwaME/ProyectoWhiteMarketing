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

    
        const configurarControl = (filaElement, trackElement) => {
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