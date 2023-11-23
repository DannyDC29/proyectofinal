document.addEventListener("DOMContentLoaded", function () {
    cargarCursos();
});

function cargarCursos() {
    var cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    var cursosLista = document.getElementById("cursos-lista");
    cursosLista.innerHTML = "";

    cursos.forEach(function (curso, index) {
        agregarCursoEnLista(curso, index);
    });
}

function agregarCursoEnLista(curso, index) {
    var cursosLista = document.getElementById("cursos-lista");
    var cursoDiv = document.createElement("div");
    cursoDiv.classList.add("curso");

    var tituloElement = document.createElement("h3");
    tituloElement.textContent = curso.titulo;

    var descripcionElement = document.createElement("p");
    descripcionElement.textContent = curso.descripcion;

    var abrirButton = document.createElement("button");
    abrirButton.textContent = "Acceder al Curso";
    abrirButton.addEventListener("click", function () {
        accederCurso(curso);
    });

    cursoDiv.appendChild(tituloElement);
    cursoDiv.appendChild(descripcionElement);
    cursoDiv.appendChild(abrirButton);

    cursosLista.appendChild(cursoDiv);
}

function accederCurso(curso) {
    // Construir la URL con los parámetros del curso
    var url = 'curso.html?titulo=' + encodeURIComponent(curso.titulo) + '&descripcion=' + encodeURIComponent(curso.descripcion);

    // Redirigir a la nueva página del curso
    window.location.href = url;
}
