
/*Boton editat*/
function editarInformacion(numero) {
    var codigoTematica = document.getElementById("codigoTematica" + numero).innerText;
    var tituloTematica = document.getElementById("tituloTematica" + numero).innerText;
    var precioTematica = document.getElementById("precioTematica" + numero).innerText.replace("Precio: ", "");

    document.getElementById("nuevoCodigoTematica").value = codigoTematica;
    document.getElementById("nuevoTituloTematica").value = tituloTematica;
    document.getElementById("nuevoPrecioTematica").value = precioTematica;

    document.querySelector(".container").style.display = "none";
    document.getElementById("formularioEdicion").style.display = "block";
}


/*boton guardar informacion*/
function guardarEdicion(numero) {
    var nuevoCodigoTematica = document.getElementById("nuevoCodigoTematica").value;
    var nuevoTituloTematica = document.getElementById("nuevoTituloTematica").value;
    var nuevoPrecioTematica = document.getElementById("nuevoPrecioTematica").value;

    document.getElementById("codigoTematica" + numero).innerText = nuevoCodigoTematica;
    document.getElementById("tituloTematica" + numero).innerText = nuevoTituloTematica;
    document.getElementById("precioTematica" + numero).innerText = "Precio: " + nuevoPrecioTematica;
    document.querySelector(".container").style.display = "flex";
    document.getElementById("formularioEdicion").style.display = "none";

    
    var cursos = document.getElementById("cursos")
    var cursosAgregados = document.getElementById("cursosAgregados")

    var li = crearNodoTexto("li", cursos.value)
    adicionarNodoAContenedor(li,cursosAgregados)

    if (cursos.selectedIndex !== -1) {
        
        cursos.remove(cursos.selectedIndex);}

    localStorage.setItem("minuevotituloTematica1", nuevoTituloTematica);
    localStorage.setItem("minuevocodigoTematica1", nuevoCodigoTematica);
    localStorage.setItem("minuevoprecioTematica1", nuevoPrecioTematica);


}

document.getElementById("tituloTematica1").innerHTML = localStorage.getItem("minuevotituloTematica1");
document.getElementById("codigoTematica1").innerHTML = localStorage.getItem("minuevocodigoTematica1");
document.getElementById("precioTematica1").innerHTML = localStorage.getItem("minuevoprecioTematica1");

/*Boton eliminar
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
});*/