let btnevniar = document.getElementById("agregarComen");
let contComentarios = document.getElementById("containerComent");


btnevniar.addEventListener("click", (event) =>{
    // let comentario = prompt("Ingrese su comentario");
    // let caja = document.createElement("div");
    // caja.classList.add("boxes");
    // caja.textContent=comentario;
    // contComentarios.appendChild(caja);

    document.getElementById('miModal').style.display = 'block';

    document.querySelector('.close-button').onclick = function() {
    document.getElementById('miModal').style.display = 'none';

    };

    document.getElementById('customOk').onclick = function() {
      let comentario = document.getElementById('customInput').value;
      let caja = document.createElement("div");
      caja.classList.add("boxes");
      caja.textContent=comentario;
      contComentarios.appendChild(caja);
      document.getElementById('miModal').style.display = 'none';
    };

});



