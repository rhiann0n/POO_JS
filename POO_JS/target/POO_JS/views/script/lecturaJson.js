//crear una solicitud XHttpsRequest = solicitud al protocolo https del navegador
const xmlhttp = new XMLHttpRequest();

//definir una función que se va a ejecutar cuando se complete la solicitud que hemos definido
xmlhttp.onload = function () {
    //Para leer un JSON y convertirlo en un objeto se utiliza la expresión JSON.parse(archivo, variable...ll)
    const myObj = JSON.parse(this.responseText); // lo que trae de respuesta esa llamada http
    //inicializamos las variables que se van a mostrar en el HTML
    let texto = "";
    let pet = "";

    //iteramos el objeto con los datos del mismo sobre las propiedades JSON
    for(const elem in myObj) {
        if ( elem === "pets") {
            //si la propiedad es pets iteramos con el array mascotas
            for (const p of myObj[elem]) {
                pet += `Animal: ${p.animal} - Nombre: ${p.name} <br>`
            }
        }else{
            //de lo contrario, agrega el texto de las propiedades principales
               texto += `${elem.toUpperCase()}: ${myObj[elem]} <br>`
            }
        }
    //muestra el contenido en el HTML
    document.querySelector(".salida").innerHTML = texto + pet;
}
//configurar la solicitud para obtener el archivo JSON
xmlhttp.open("GET", "views/files/archivo.json");

//enviar la solicitud
xmlhttp.send();