window.onload = function () {
    const USUARIO = {
        nombre: "Antonio García",
        nombreUsuario: "agar007",
        password: "agar007_pass",
        login: function (nombreUsuario, password){
            if (nombreUsuario == this.nombreUsuario && password == this.password){
                alert("Usuario Correcto");
            } else {
                alert("Usuario Incorrecto");
            }
    },
    bienvenida: function () {
            alert("Bienvenido al Sistema" + this.nombre);
    }
    }

    let nombreUsuario = prompt("Indique el nombre del Usuario");
    let passUsuario = prompt("Indique el password del Usuario");
    USUARIO.login(nombreUsuario,passUsuario);
    USUARIO.bienvenida();
    //mediante la invocación al objeto se pueden modificar sus valores
    USUARIO.nombreUsuario="irine";
    USUARIO.password="lechuza";
    USUARIO.nombre="IRINA MEDINA";
    USUARIO.login(nombreUsuario,passUsuario);
    USUARIO.bienvenida();

    // const receta = {nombre: "Templada de Pulpo",
    // tElaboracion: 30,
    // formato: {
    //     tapa: "1 persona", media: "2 personas"
    // }}
}