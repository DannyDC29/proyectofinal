function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Validar usuario (solo para propósitos demostrativos, NO es seguro)
    if (usuario === "admin" && password === "admin") {
        localStorage.setItem("usuarioAutenticado", true);
        window.location.href = "courses_list.html";
    } else {
        alert(usuario === "maria" && password === "12345");
        window.location.href = "user.html";
    }
}
