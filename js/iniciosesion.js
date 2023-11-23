function insertar() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var tipodocumento = document.getElementById("tipodocumento").value;
    var numeroidentidad = document.getElementById("numeroidentidad").value;
    var fechanacimiento = document.getElementById("fechanacimiento").value;
    var tipoestudio = document.getElementById("tipoestudio").value;
    var barrio = document.getElementById("barrio").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;


    console.log(nombres);
    console.log(apellidos);
    console.log(tipodocumento);
    console.log(numeroidentidad);
    console.log(fechanacimiento);
    console.log(tipoestudio);
    console.log(barrio);
    console.log(direccion);
    console.log(correo);
    console.log(usuario);
    console.log(password);


    var nuevoUsuario = new Usuario(usuario, password);

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;


    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var encontrado = false;

    // Check if the user is admin
    if (usuario === "admin" && password === "admin") {
        localStorage.setItem("usuarioAutenticado", true);
        window.location.href = "inicioadministrador.html";
        return;
    }

    if (usuario === "locutor" && password === "locutor") {
        localStorage.setItem("usuarioAutenticado", true);
        window.location.href = "inicioinstructor.html";
        return;
    }

    // Check if the user is in the list of usuarios
    for (let i = 0; i < usuarios.length && !encontrado; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].password === password) {
            // Redirect based on user type
                window.location.href = "inicioestudiante.html";
            
            encontrado = true;
        }
    }}