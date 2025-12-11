// --------------------------------------------
// VARIABLES Y CONFIGURACIÓN
// --------------------------------------------
let btnevniar = document.getElementById("agregarComen");
let contComentarios = document.getElementById("containerComent");
let modal = document.getElementById("miModal");

let commentsPerPage = 6;
let currentPage = 1;

let comentarios = [
  "Excelente servicio, quedé encantado.",
  "Muy profesionales en su trabajo.",
  "Me ayudaron a crecer mis ventas.",
  "Creatividad impresionante.",
  "Atención rápida y efectiva.",
  "Mi campaña quedó espectacular.",
  "Sin duda volveré a trabajar con ustedes.",
  "Me encantó el diseño que hicieron."
];


function renderComments() {
  document.querySelectorAll("#containerComent .boxes").forEach(e => e.remove());

  let start = (currentPage - 1) * commentsPerPage;
  let end = start + commentsPerPage;

  let pagina = comentarios.slice(start, end);

  pagina.forEach(texto => {
    let caja = document.createElement("div");
    caja.classList.add("boxes");
    caja.textContent = texto;
    contComentarios.appendChild(caja);
  });

  crearPaginacion();
}


function crearPaginacion() {
  let paginadorPrevio = document.getElementById("pagination");
  if (paginadorPrevio) paginadorPrevio.remove();

  let totalPaginas = Math.ceil(comentarios.length / commentsPerPage);

  if (totalPaginas <= 1) return; 

  let paginacion = document.createElement("div");
  paginacion.id = "pagination";

  for (let i = 1; i <= totalPaginas; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    

    if (i === currentPage) {
      btn.style.background = "#B0191F";
      btn.style.color = "white";
    }

    btn.addEventListener("click", () => {
      currentPage = i;
      renderComments();
    });

    paginacion.appendChild(btn);
  }

  contComentarios.appendChild(paginacion);
}


btnevniar.addEventListener("click", () => {
  modal.style.display = "block";
});


document.querySelector(".close-button").onclick = () => {
  modal.style.display = "none";
};


document.getElementById("customOk").onclick = function () {
  let textbox = document.getElementById("customInput");
  let comentario = textbox.value.trim();

  if (comentario === "") return;


  comentarios.push(comentario);


  currentPage = Math.ceil(comentarios.length / commentsPerPage);


  textbox.value = "";
  modal.style.display = "none";

  renderComments();
};

renderComments();
