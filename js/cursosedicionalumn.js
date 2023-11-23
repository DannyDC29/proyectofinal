//Función para editar la información
function editarInformacion() {
    var formularioEdicion = document.getElementById("formularioEdicion");
    formularioEdicion.style.display = "block";

    //esto es para que solo salga el formulario
    document.querySelector(".container").style.display = "none";
    document.getElementById("formularioEdicion").style.display = "block";
}

//Función para guardar la edición
function guardarEdicion() {
    var nuevoTituloCurso = document.getElementById("nuevoTituloCurso").value;
    var nuevoNombreCurso = document.getElementById("nuevoNombreCurso").value;
    var nuevosVideosAsociados = document.getElementById("nuevosVideosAsociados").value;

    var tituloCurso = document.getElementById("tituloCurso");
    var nombreCurso = document.getElementById("nombreCurso");
    var descripVideo = document.getElementById("descripVideo");

    tituloCurso.innerHTML = nuevoTituloCurso;
    nombreCurso.innerHTML = nuevoNombreCurso;
    descripVideo.innerHTML = nuevosVideosAsociados;

    var formularioEdicion = document.getElementById("formularioEdicion");
    formularioEdicion.style.display = "none";


    //esto es para que solo salga lo que se edito
    document.querySelector(".container").style.display = "flex";
    document.getElementById("formularioEdicion").style.display = "none";

    var archivo = document.getElementById("archivo").files[0];
    if (archivo) {
        var archivoType = archivo.type;
        var allowedExtensions = ["video/mp4"];
        if (allowedExtensions.includes(archivoType)) {
            var video = document.createElement("video");
            video.preload = "metadata";
            video.onloadedmetadata = function() {
                if (video.duration <= 180) {
                    var lector = new FileReader();
                    lector.onload = function(e) {
                        var contenido = e.target.result;
                        document.getElementById("mensaje").textContent = contenido;
                        // Mostrar el video en el reproductor de video en la página.
                        var videoPlayer = document.getElementById("videoPlayer");
                        videoPlayer.src = contenido;
                    };
                    lector.readAsDataURL(archivo);
                } else {
                    alert("Por favor, seleccione un archivo de video con una duración máxima de 3 minutos.");
                }
            };
            video.src = URL.createObjectURL(archivo);
        } else {
            alert("Por favor, seleccione un archivo de video en formato mp4.");
        }
    } else {
        alert("No se seleccionó ningún archivo.");
    }
}

