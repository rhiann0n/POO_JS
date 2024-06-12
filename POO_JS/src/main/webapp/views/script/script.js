window.onload = function () {
    let parrafo = document.querySelector(".parrafo");
    console.log(typeof (parrafo)); //mostrar parrafo
    leerParrafo(parrafo);
    Objetos();
    viaje();
    vehiculos();
}
function leerParrafo(parrafo) {
    parrafo.innerHTML="Es una prueba."
    let matriz = [4,32,3,4,5,3]; //declarando un objeto tipo array
    let miArray = new Array (5); //declarando un bojeto array co n5 elementos
    console.log(miArray);
    miArray.push("Juan"); //agrega al final
    miArray.unshift("Pedro"); //añade al principio del array
    console.log(miArray);
    console.log(miArray.length); //le aplico el método length para conocer la longitud
    console.log(typeof (miArray));
    console.log(typeof (console));
    console.log(typeof (document.querySelector("#imagen")));
    //instrucción que permite verificar si el objeto es una instancia de una clase
    console.log(miArray instanceof Array); //true porque miArray es de la clase Array
    console.log(miArray instanceof Map); //false porque no es una instancia de un Mapa
}

function Objetos() {
    //Objeto Object
    let notas = new Object(); //object del lenguaje
    notas.valores = [7,8,6,5,4,10,8];
    notas.cantidad = notas.valores.length;
    notas.materia ="Matemáticas"; //al objeto se le puede crear métodos y atributos como en java getNombre o setNombre
    console.log(notas.cantidad);
    console.log(notas.valores);
    notas.media = 0;
    for (let i = 0; i < notas.valores.length; i++) {
        notas.media += notas.valores[i];
    }
    notas.media=notas.media/notas.cantidad;
    console.log(notas.media.toFixed(2));
    console.log(notas.materia);
}

/*
 * Declaramos un objeto Viaje en una función Viaje
* */
function viaje() {
    //declaramos el objeto viaje y la función mostrar
    let viajeN = { //objeto viaje
        origen: "Granada", //atributos
        destino: "El Cairo",
        dias: 8,
        precio: 1000,
        mostrar: function () {
            console.log(`${this.origen} / ${this.destino}`);
            console.log(`Durante ${this.dias} días, con un precio de ${this.precio} euros`)
        }
    }
    viajeN.mostrar();
}
function vehiculos() {
    otroVehiculo = new Vehiculo("Citroen","C4","Rojo","110CV");
    otroVehiculo.mostrar();
}