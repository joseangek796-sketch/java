function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        alert("Inicio de sesión correcto");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function registrar() {

    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    let confirmar = document.getElementById("confirmar").value;

    if (usuario === "" || correo === "" || contrasena === "" || confirmar === "") {
        alert("Debe llenar todos los campos");
        return;
    }

    if (contrasena !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    alert("Usuario registrado correctamente");
}