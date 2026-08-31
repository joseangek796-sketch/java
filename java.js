function registrar() {

    let usuario = document.getElementById("usuarioRegistro").value;
    let correo = document.getElementById("correoRegistro").value;
    let contrasena = document.getElementById("contrasenaRegistro").value;
    let confirmar = document.getElementById("confirmarRegistro").value;

    // Verificar campos vacíos
    if (usuario == "" || correo == "" || contrasena == "" || confirmar == "") {
        alert("Llene todos los campos");
        return;
    }

    // Verificar contraseñas
    if (contrasena != confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Crear usuario
    let nuevoUsuario = {
        usuario: usuario,
        correo: correo,
        contrasena: contrasena
    };

    // Obtener usuarios que ya existen
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario ya existe
    let existe = usuarios.some(function(user) {
        return user.usuario == usuario;
    });

    if (existe) {
        alert("Ese usuario ya está registrado");
        return;
    }

    // Agregar nuevo usuario
    usuarios.push(nuevoUsuario);

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente");

    // Limpiar campos
    document.getElementById("usuarioRegistro").value = "";
    document.getElementById("correoRegistro").value = "";
    document.getElementById("contrasenaRegistro").value = "";
    document.getElementById("confirmarRegistro").value = "";
}