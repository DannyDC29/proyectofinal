function insertar() {
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");
    var tipodocumento = document.getElementById("tipodocumento");
    var numeroidentidad = document.getElementById("numeroidentidad");
    var fechanacimiento = document.getElementById("fechanacimiento");
    var ultimoestudio = document.getElementById("ultimoestudio");
    var barrio = document.getElementById("barrio");
    var direccion = document.getElementById("direccion");
    var correo = document.getElementById("correo");
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var tipo = document.getElementById("tipo");

    console.log(nombres.value)
    console.log(apellidos.value)
    console.log(tipodocumento.value)
    console.log(numeroidentidad.value)
    console.log(fechanacimiento.value)
    console.log(ultimoestudio.value)
    console.log(barrio.value)
    console.log(direccion.value)
    console.log(correo.value)
    console.log(usuario.value)
    console.log(password.value)
    console.log(tipo.value)

    usuario = new Usuario( usuario.value,password.value, tipo.value)

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuario);

    localStorage.setItem("usuarios",
        JSON.stringify(usuarios))

    usuario.value = ""
    password.value = ""
    //usuario.focus()


}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");

    var encontrado = false

    if (usuario === "admin" && password === "admin") {
        localStorage.setItem("usuarioAutenticado", true);
        window.location.href = "courses_list.html";
    } else {        
            for (let i = 0; i < usuarios.length && !encontrado;
                i++) {
        
                if (usuarios[i].usuario == usuario.value &&
                    usuarios[i].password == password.value) {
        
                        if (usuarios[i].tipo == "instructor")
                        location.href = "inicioadmin.html"
                    else if (usuarios[i].tipo == "estudiante")
                        location.href = "user.html"
        
                    encontrado = true
        
                }
        
            }
        
            if (!encontrado)
                alert('Usuario y/o password errado')
        
       
    }
}