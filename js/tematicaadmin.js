document.getElementById("mitituloTematica1").innerHTML = localStorage.getItem("minuevotituloTematica1");
document.getElementById("micodigoTematica1").innerHTML = localStorage.getItem("minuevocodigoTematica1");
document.getElementById("miprecioTematica1").innerHTML = localStorage.getItem("minuevoprecioTematica1");



function editarEnlace() {
    var link = document.getElementById("myLink");
    var newURL = prompt("Introduce la nueva URL para el enlace:");
    if (newURL != null) {
       link.href = newURL;
    }
   }

   function editarImagen() {
    var img = document.getElementById("myImage");
    var newImageURL = prompt("Introduce la nueva URL de la imagen:");
    if (newImageURL != null) {
       img.src = newImageURL;
    }
   }


   function añadirContenido() {
    var usuarioTexto = document.getElementById("usuarioTexto").value;
    window.location.href = "agregar_ad.html";
}

document.getElementById("botonAñadir").addEventListener("click", añadirContenido);









var eliminarCursoBtn = document.getElementById('eliminarCursoBtn');
var cursoAEliminar = document.querySelector('.course');
eliminarCursoBtn.addEventListener('click', function() {

    var confirmacion = confirm('¿Estás seguro que deseas eliminar la tematica?');
    if (confirmacion) {
        if (cursoAEliminar) {
            cursoAEliminar.remove();
            
            console.log('Tematica eliminada');
            window.location.href = "../html/tematicaadmin.html"
        } else {
            console.log('No se encontró la tematica para eliminar');
        }
    } else {
        console.log('Operación cancelada');
    }
});