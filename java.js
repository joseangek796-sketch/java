function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "admin" && contrasena === "1234") {
        alert("Inicio de sesión correcto");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}