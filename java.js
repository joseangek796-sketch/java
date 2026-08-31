function registrar() {

    let usuario =
        document.getElementById("usuarioRegistro").value;

    let correo =
        document.getElementById("correoRegistro").value;

    let contrasena =
        document.getElementById("contrasenaRegistro").value;

    let confirmar =
        document.getElementById("confirmarRegistro").value;


    if (
        usuario == "" ||
        correo == "" ||
        contrasena == "" ||
        confirmar == ""
    ) {

        alert("Llene todos los campos");

        return;
    }


    if (contrasena != confirmar) {

        alert("Las contraseñas no coinciden");

        return;
    }


    alert("Usuario registrado correctamente");

}