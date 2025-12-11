document.addEventListener("DOMContentLoaded", () => {
    /* =========================================
       1. LÓGICA DE COMENTARIOS
       ========================================= */
    const btnevniar = document.getElementById("agregarComen");
    const contComentarios = document.getElementById("containerComent");
    const modal = document.getElementById("miModal");
    const closeModal = document.getElementById("closeModal");
    const btnAceptar = document.getElementById("customOk");
    const inputComentario = document.getElementById("customInput");

    // Array de comentarios
    let comentarios = [
        "El servicio superó todas mis expectativas, ¡brutal!",
        "Profesionalismo puro. Mi marca ahora tiene otra cara.",
        "Las activaciones BTL fueron un éxito rotundo.",
        "Creatividad y rapidez. Justo lo que necesitaba.",
        "Aumentaron mis ventas un 30% en dos meses.",
        "La animación del logo quedó increíble, 10/10.",
        "Sin duda los mejores de Honduras en marketing.",
        "El equipo entendió perfectamente mi visión."
    ];

    let commentsPerPage = 6;
    let currentPage = 1;

    // Verificar existencia de elementos clave
    if (contComentarios && modal) {
        
        function renderComments() {
            contComentarios.innerHTML = "";
            let start = (currentPage - 1) * commentsPerPage;
            let end = start + commentsPerPage;
            let pagina = comentarios.slice(start, end);

            pagina.forEach(texto => {
                let card = document.createElement("div");
                card.className = "review-card"; // Nueva clase CSS

                // HTML con la nueva estructura y marca de agua
                card.innerHTML = `
                    <div class="watermark-icon"><i class="fa-solid fa-quote-right"></i></div>
                    
                    <div class="review-header">
                        <div class="user-info">
                            <div class="avatar"><i class="fa-solid fa-user"></i></div>
                            <div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p class="review-text">"${texto}"</p>
                    
                    <div class="review-footer">Cliente Verificado</div>
                `;

                // Animación de entrada
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                contComentarios.appendChild(card);

                setTimeout(() => {
                    card.style.transition = "all 0.5s ease";
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 100);
            });

            crearPaginacion();
        }

        function crearPaginacion() {
            const oldPag = document.getElementById("pagination");
            if (oldPag) oldPag.remove();

            let totalPaginas = Math.ceil(comentarios.length / commentsPerPage);
            if (totalPaginas <= 1) return;

            let paginacion = document.createElement("div");
            paginacion.id = "pagination";
            // Estilos inline para asegurar layout
            paginacion.style.display = "flex";
            paginacion.style.justifyContent = "center";
            paginacion.style.gap = "10px";
            paginacion.style.marginTop = "40px";
            paginacion.style.gridColumn = "1 / -1"; // Ocupa todo el ancho

            for (let i = 1; i <= totalPaginas; i++) {
                let btn = document.createElement("button");
                btn.textContent = i;
                
                // Estilos básicos del botón
                btn.style.width = "40px";
                btn.style.height = "40px";
                btn.style.borderRadius = "50%";
                btn.style.border = "none";
                btn.style.cursor = "pointer";
                btn.style.fontWeight = "bold";
                btn.style.transition = "0.3s";

                if (i === currentPage) {
                    btn.style.background = "#B0191F";
                    btn.style.color = "white";
                    btn.style.boxShadow = "0 5px 15px rgba(176,25,31,0.4)";
                } else {
                    btn.style.background = "white";
                    btn.style.color = "#333";
                    btn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
                }

                btn.addEventListener("click", () => {
                    currentPage = i;
                    renderComments();
                    // Scroll suave hacia los comentarios
                    const offset = contComentarios.getBoundingClientRect().top + window.scrollY - 150;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                });

                paginacion.appendChild(btn);
            }
            contComentarios.parentNode.appendChild(paginacion);
        }

        // --- Event Listeners del Modal ---
        if(btnevniar) {
            btnevniar.addEventListener("click", (e) => {
                e.preventDefault();
                modal.style.display = "flex";
            });
        }

        if(closeModal) {
            closeModal.onclick = () => modal.style.display = "none";
        }

        window.onclick = (event) => {
            if (event.target == modal) modal.style.display = "none";
        };

        if(btnAceptar && inputComentario) {
            btnAceptar.onclick = function () {
                let texto = inputComentario.value.trim();
                if (texto === "") {
                    inputComentario.style.border = "2px solid #B0191F";
                    setTimeout(() => inputComentario.style.border = "1px solid #ddd", 2000);
                    return;
                }
                comentarios.unshift(texto);
                currentPage = 1;
                inputComentario.value = "";
                modal.style.display = "none";
                renderComments();
            };
        }

        // Iniciar renderizado
        renderComments();
    }

    /* =========================================
       2. LÓGICA DEL MENÚ HAMBURGUESA (FIXED)
       ========================================= */
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener("click", (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove("show");
            }
        });
    }

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.remove("show"); // Cerrar menú al hacer click
            }
        });
    });
});