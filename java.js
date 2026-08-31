function iniciarSesion(event) {

    event.preventDefault();

    let usuario = document.getElementById("username").value;
    let contrasena = document.getElementById("password").value;


    // Obtener usuarios guardados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    // Buscar si existe el usuario con esa contraseña
    let encontrado = usuarios.find(function(user) {

        return user.usuario == usuario &&
               user.contrasena == contrasena;

    });


    if (encontrado) {

        alert("Inicio de sesión correcto");

        // Ir a otra página
        // window.location.href = "inicio.html";

    } else {

        alert("Usuario o contraseña incorrectos");

    }

}