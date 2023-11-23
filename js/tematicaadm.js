 // Obtener parámetros de la URL
 var params = new URLSearchParams(window.location.search);
 var tituloCurso = params.get('titulo');
 var descripcionCurso = params.get('descripcion');

 // Mostrar detalles del curso
 document.getElementById("titulo-curso").textContent = tituloCurso;
 document.getElementById("descripcion-curso").textContent = descripcionCurso;

 // Función para inscribirse en el curso
 function inscribirseEnCurso() {
     var usuarioActual = obtenerUsuarioActual(); // Implementa según tu autenticación
     if (usuarioActual) {
         // Obtener información del curso actual
         var cursoActual = {
             titulo: tituloCurso,
             descripcion: descripcionCurso
             // Puedes incluir más detalles si es necesario
         };

         // Realizar lógica de inscripción (agregar usuario a la lista de inscritos)
         inscribirUsuarioEnCurso(usuarioActual, cursoActual);
     } else {
        alert("¡Te has inscrito en el curso!")         // Redirigir a la página de inicio de sesión si es necesario
         // window.location.href = "login.html";
     }
 }

 function obtenerUsuarioActual() {
     // Implementa según tu autenticación
     return localStorage.getItem("nombreUsuario");
     return "usuario123";
 }

 function inscribirUsuarioEnCurso(usuario, curso) {
     // Implementa la lógica para agregar el usuario a la lista de inscritos en el curso
     // Puedes acceder al objeto curso y a la propiedad inscritos
     // Actualiza la estructura de datos y guarda en localStorage si es necesario
     alert("¡Te has inscrito en el curso!");
 }  