class Vehiculo {
    marca;
    modelo;
    color;
    potencia;
    constructor(marca, modelo, color, potencia){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;
    }

    mostrar() {
    console.log(`Coche/moto de la marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} con una potencia de ${this.potencia}`);

    }
}
class Coche extends Vehiculo {
    gama;
    nPuertas;

    constructor(marca, modelo, color, potencia, gama, nPuertas) {
        super(marca, modelo, color, potencia);
        this.gama = gama;
        this.nPuertas = nPuertas;
    }

    mostrar() {
        super.mostrar();
        console.log(`Es de gama ${this.gama} y tiene ${this.nPuertas} puertas`)
    }
}

class Moto extends Vehiculo{
    cilindrada;
    posturaConduccion;

    constructor(marca, modelo, color, potencia, cilindrada, posturaConduccion) {
        super(marca, modelo, color, potencia);
        this.cilindrada = cilindrada;
        this.posturaConduccion = posturaConduccion;
    }

    mostrar(){
        console.log("Datos de la Moto");
        super.mostrar();
        console.log(`Tiene una cilindrada de ${this.cilindrada} y la postura de conducción es ${this.posturaConduccion} `);
    }
}
let miVehiculo = new Vehiculo("Opel", "Astra", "dorado", "100CV");
miVehiculo.mostrar();
let miCocheNuevo = new Coche("Audi", "A4", "blanco", "150CV", "alta", 5);
miCocheNuevo.mostrar();
let miMoto = new Moto("BMW", "XXfh1", "negro", "120CV", 10, "continental");
miMoto.mostrar();

//recorridos de Objetos
for (dato in miVehiculo){
    console.log(`${dato} : ${miVehiculo[dato]}`)
}
for(dato of Object.getOwnPropertyNames(miVehiculo)){
    console.log(dato);
}
//bucle for in
for(dato in miCocheNuevo){
    console.log(`micocheNuevo.${dato} = ${miCocheNuevo[dato]}`);
}
//borrar un dato en un objeto creado
delete miVehiculo.potencia;
//mostramos nuevamente miVehiculo y comprobamos que ha borrado la potencia
for (dato in miVehiculo){
    console.log(`${dato} : ${miVehiculo[dato]}`)
}
let texto = JSON.stringify(miVehiculo);
console.log(texto);
console.log(JSON.stringify(miCocheNuevo));
console.log(JSON.stringify(miMoto));

