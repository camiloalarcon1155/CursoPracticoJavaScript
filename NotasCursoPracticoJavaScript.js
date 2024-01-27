// Aqui continuamos con curso practico de java scrip, el cual inicio con curso basico de javascript: good look!!



🙌🙌🙌🙌// ## ejercicio 1

-Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
//una variable es un espacio reservado en memoria y sirve para llevar un objeto fisico como dato a la computadora
¿Cuál es la diferencia entre declarar e inicializar una variable?
//declarar una variable darle un nombre para pedirle un espacio en memoria, inicializar esa variable es llenar ese espacio en memoria con un dato
¿Cuál es la diferencia entre sumar números y concatenar strings?
//la diferencia es que en una haces la operacion matematica y en la otra unos o pegas los 2 numeros
¿Cuál operador me permite sumar o concatenar?
// el operador es +





let nombre = "Juan";
let apellido = "Pérez";
let usuarioPlatzi = "juanperez123";
let edad = 25;
let correoElectronico = "juan.perez@example.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1500.75;
let deuda = 500.25;


console.log("Nombre completo: " + nombre + " " + apellido)
console.log("Dinero ahorrado: " + dineroAhorrado + "  Deudas: " + deuda)
var DineroReal = dineroAhorrado - deuda;
console.log("Dinero ahorrado menos deuda: " + DineroReal)


/* ¿Qué es una función?

es una metodo por el cual podemos darle un tratamiento a los datos en memoria, para conseguir determinada operacion


¿Cuándo me sirve usar una función en mi código?
cuando deseo transformar los datos
¿Cuál es la diferencia entre parámetros y argumentos de una función? */
los parametros son las variables que se declaran en la funcion al declararla.argumentos son los valores que le pasamos a funcion cuando la llamamos

/* 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//mi solution:

function nombrarPersona(name, lastname, nickname) { 
    console.log("Mi nombre es " + name + lastname + ", pero prefiero que me digas " + nickname + ".")
};
// lo corres en consola del navegador y luego llamas la funcion asi :
nombrarPersona("Juan David", "Castro Gallego", "juandc");

/////aqui terminaesteejercicio


💿💿💿//otro ejercicio:

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional ?
    //es un tipo de filtro que permite obtener o tratar los datos con funciones determinadas, de acuerdo a si se cumple o no ciertos parametros
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias ?
    //if, switch,WHILE
¿Puedo combinar funciones y condicionales ?
// se usan los condicionales  dentro de las funciones
    
////////////////📃📃📃📃📃//////////////////
//respuestas de IA:
/* 
    Un condicional es una estructura de control en programación que permite ejecutar diferentes bloques de código dependiendo de si se cumple o no una condición dada.En otras palabras, los condicionales permiten tomar decisiones en el flujo de ejecución del programa.

    --IF,WHILE

-   Sí, es muy común combinar funciones y condicionales en la programación. Puedes llamar a funciones dentro de bloques condicionales para ejecutar cierto código dependiendo de las condiciones. */

///////Aqui termina📃📃📃📃📃//////////////////


    
🌹🌹🌹🌹/////otro ejercicio:
    /* 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
 */
    
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//mi solucion:


let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("no puedes tomar ningun curso");
}//TUVE EN cuenta el igual



////////////////📃📃📃📃📃//////////////////
//respuestas de IA:

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
   console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
   console.log("Tipo de suscripción no reconocido");
}

  //////Aqui termina📃📃📃📃📃//////////////////

  
😉😉😉///otro ejercicio:
//Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

//mi solucion:

let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//fue la misma respuesta que la IA

👌👌👌👌//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏


🤷‍♀️intentare hacerlo:

//let tipoDeSuscripcion = "Basic";
var ciclo = ["Free", "Basic", "Expert", "ExpertPlus"];
function curso(suscripcion) { 
    this.suscripcion = suscripcion
}
    
for (var i = 0; i < 4; i++) {
    var suscripciones = [];
    var miSuscripcion = new curso(ciclo);
    suscripciones.push(miSuscripcion);
}

//

function tomarCurso(tipoDeSuscripcion)
for (var i = 0; i < curso.length; i++)


    for (var i = 0; i < ciclo.length; i++){
        if (ciclo[i].suscripcion === "Free") {
            console.log("Solo puedes tomar los cursos gratis");
        }
    }
        
if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


//no logré hacerlo, pero asi lo hizo la IA📃📃📃📃📃📃📃📃📃

const tipoDeSuscripcion = "Basic";

const suscripciones = {
   "Free": "Solo puedes tomar los cursos gratis",
   "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
   "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
   "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

console.log(suscripciones[tipoDeSuscripcion] || "Tipo de suscripción no reconocido");

//En este enfoque, el objeto suscripciones actúa como una especie de "switch" donde las claves son los casos y los valores son los resultados asociados. Utilizamos la clave tipoDeSuscripcion para acceder al mensaje correspondiente. El operador || se utiliza para proporcionar un mensaje predeterminado si la clave no se encuentra en el objeto.

//Este enfoque es más compacto y escalable, ya que puedes agregar o quitar tipos de suscripción fácilmente sin modificar la lógica condicional.

//aqui termina el ejercicio 📃📃📃📃📃📃📃📃




👍👍//otro ejercicio////
 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo ?
    //es un recorrido que se le da un array, en busca de algo
¿Qué tipos de ciclos existen en JavaScript ?
    //ciclo for, ciclo while
¿Qué es un ciclo infinito y por qué es un problema ?
    //es cuando la condicional para que tu ciclo se cumpla y se interrumpa, no se cumple nunca y el ciclo se se sigue ejecutando infinitamente, ocupando toodo el espacio en memoria.
¿Puedo mezclar ciclos y condicionales?
//siempre se mezclan para crear funciones

////respuestas de la IA////📃📃📃📃📃📃📃📃📃📃📃//

/* 1️⃣ ¿Qué es un ciclo?
Un ciclo, también conocido como bucle, es una estructura de control en programación que permite ejecutar un bloque de código varias veces, según una condición o un conjunto de condiciones.

En JavaScript, hay varios tipos de ciclos:

for: Se utiliza para iterar sobre una secuencia de elementos.

*/
    
for (let i = 0; i < 5; i++) {
  // Código a ejecutar en cada iteración
}

//while: Ejecuta un bloque de código mientras una condición sea verdadera.

let i = 0;
while (i < 5) {
  // Código a ejecutar en cada iteración
  i++;
}

//do-while: Similar al ciclo while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición.

let i = 0;
do {
  // Código a ejecutar en cada iteración
  i++;
} while (i < 5);


//for...of: Utilizado para iterar sobre elementos de una colección (arrays, strings, etc.).
const array = [1, 2, 3];
for (const element of array) {
  // Código a ejecutar en cada iteración
}

//¿Qué es un ciclo infinito y por qué es un problema? Un ciclo infinito es un bucle que nunca termina de ejecutarse, ya que la condición que se evalúa siempre es verdadera. Esto puede ser un problema porque puede hacer que un programa se vuelva no receptivo o cause un consumo excesivo de recursos de la computadora, ya que nunca se libera de la ejecución del bucle.

//¿Puedo mezclar ciclos y condicionales?Sí, es común mezclar ciclos y condicionales en la programación. Puedes usar estructuras condicionales dentro de un ciclo para tomar decisiones basadas en ciertas condiciones durante cada iteración del ciclo. Esto permite una mayor flexibilidad y control en la ejecución del código.

//aqui termina el ejercicio //📃📃📃📃📃📃📃📃📃📃📃📃////


🐮🐮🐮🐮🐮🐮//siguiente ejercicio:Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//mi soluction:
var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}
//segundo codigo:
var i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}

//a la IA le dio igual que a mi

🤳🤳🤳🤳//otro ejercicio:
//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.


// mi solucion:

console.log("Hola, este es un text de suma");
var suma= prompt("cuanto es 2+2:    ")
                                  if (suma === "4") {
    console.log("FELICITACIONES");
} else {
    console.log("volvemos a empezar")
}//NOTA: al digitar una respuesta con  prompt se toma como cadena


//asi lo hizo la IA📃📃📃📃📃📃📃📃📃📃📃:

let respuestaUsuario;

while (true) {
    respuestaUsuario = prompt("¿Cuánto es 2 + 2?");

    if (respuestaUsuario === "4") {
        alert("¡Correcto! ¡Felicitaciones!");
        break; // Salimos del bucle si la respuesta es correcta
    } else {
        alert("Incorrecto. Vuelve a intentarlo.");
    }
}


//aqui termina el ejercicio📃📃📃📃


🐱‍👤🐱‍👤🐱‍👤🐱‍👤🐱‍👤🐱‍👤 //otro ejercicio:
 Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array ?
    //es una lista de datos guraddos en posiciones de memoria
¿Qué es un objeto ?
    //un objeto es una respresentacion en memoria de un objeto fisico, el cual tiene propiedades y metodos. donde las propiedades son caracteristicas propias de dicho objeto y sus metodos son sus acciones propias 
¿Cuándo es mejor usar objetos o arrays ?
    //se usa arrays cuando son pocos datos y repetidos. Se usa objetos cuando son muchos datos y diferentes por cada objeto
¿Puedo mezclar arrays con objetos o incluso objetos con arrays     
//se puede mezclar arrays con objetos o incluso objetos con arrays  para llenar guardar informacion

//📃📃// respuestas de la IA:

/* 
¡Claro! Aquí tienes respuestas a tus preguntas:

1. **¿Qué es un array?**
   Un array (o arreglo) en programación es una estructura de datos que permite almacenar múltiples valores bajo un solo nombre. Los elementos en un array pueden ser de cualquier tipo de datos, como números, cadenas, objetos, u otros arrays. Los índices se utilizan para acceder a elementos específicos en el array.

2. **¿Qué es un objeto?**
   Un objeto en programación es una colección de pares clave-valor, donde cada valor está asociado a una clave única. Los valores pueden ser de cualquier tipo de datos, incluyendo números, cadenas, funciones o incluso otros objetos. Los objetos permiten organizar y estructurar datos de manera más compleja que los arrays.

3. **¿Cuándo es mejor usar objetos o arrays?**
   - **Arrays:** Son ideales cuando se trata de una colección de elementos del mismo tipo (por ejemplo, una lista de números o cadenas). Se utilizan cuando la posición relativa de los elementos es importante.
   - **Objetos:** Son más apropiados cuando se necesita representar entidades más complejas con propiedades distintas. Se usan cuando la estructura de clave-valor es beneficiosa para organizar y acceder a los datos.

4. **¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**
    Sí, es completamente posible mezclar arrays con objetos en JavaScript.Por ejemplo, puedes tener un array que contenga objetos como elementos, o un objeto cuyas propiedades contengan arrays.La flexibilidad de JavaScript permite una combinación versátil de estas estructuras de datos según las necesidades específicas de tu programa.
    */
//aqui termina 📃📃📃📃📃 ejercicio
    

💧💧💧//siguiente ejercicio.Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
//mi solucion:
var carros = [];
function imprimirElemento(arrayCarros) {
    var carros= arrayCarros 
    return (carros[0])
}
// lo cargas en consola del navegador y luego llamas a la funcion imprimirElemento con el array dentro
imprimirElemento(["r", 2, 3, 4, 5])
    
🍀🍀🍀//otro ejercicio

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno(no se vale imprimir el array completo).

//mi solucion:

var carros = [];

function imprimirElemento(arrayCarros) {
    var carros = arrayCarros; 

    for (var i = 0; i < carros.length; i++){
    
        console.log(carros[i]);
        //return carros[i];
}
       // i++;
}

// despues llamamos a la funcion imprimirelemento y le enviamos el arreglo:
var perros = [
  "Uncle Ben's",
  "Mahatma",
  "Basmati",
  "Jasmine",
  "Minute Rice",
  "Wild Rice",
  "Risotto",
  "Arborio",
  "SunRice",
  "Tilda",
  "Blue Ribbon",
  "Nishiki",
  "Carolina",
  "Golden Star",
  // Puedes agregar más marcas según sea necesario
];


//y ya imprime cada elemento.(no tengo idea si esta bien)



for (var i = 0; i < perros.length; i++){
    
        console.log(perro[i]);
        //return perro[i];
};
       // i++;


// vamos a ver como lo hace la IA 📃📃📃📃📃📃📃
    function imprimirElementos(array) {
  array.forEach(function(elemento) {
    console.log(elemento);
  });
}

// Ejemplo de uso
let miArray = [1, 2, 3, 4, 5];
imprimirElementos(miArray);

//Aqui termina ejercicio//📃📃📃📃




⚡⚡⚡⚡//ultimo ejercicio:
//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


//solucion 1. Creo el objeto jugadores de futbol:
function futbolista(NOMBRE, GOLES, EQUIPO, NACIONALIDAD) {
this.nombre = NOMBRE;
this.goles = GOLES;
this.equipo = EQUIPO;
this.nacionalidad = NACIONALIDAD;   
}

var misJugadores = [];
function filtrarFutbolista(ObjetoJugador) {

    console.log(ObjetoJugador.nombre);
    console.log(ObjetoJugador.goles);
    console.log(ObjetoJugador.equipo);
    console.log(ObjetoJugador.nacionalidad);

};


let jugadoresFutbol = [];//cuando lo deje dentro del for, no me lo reconocio para imprimirlo en el navegador
var jugadores
var cantidadJugadores = prompt("Cantidad de jugadores a registrar:    ")
for (var i = 0; i < cantidadJugadores; i++) {
var nombre = prompt("ingresa el nombre del jugador:    ");
var goles = prompt("ingresa todos sus goles:    ");
var equipo = prompt("ingresa el club de su vida:    ");
var nacionalidad = prompt("ingresa su nacionalidad:    ");
    jugadores = new futbolista(nombre, goles, equipo, nacionalidad);
    
    jugadoresFutbol.push(jugadores);
    
}
filtrarFutbolista(jugadores);
//console.log(jugadoresFutbol);

//aqui termina solucion 1 de ejercicio 1:


//solucion 2 ejercicio(queda pendiente):
var listaJugadores = [];
var cantidadRegistrados =0;
function futbolista(NOMBRE, GOLES, EQUIPO, NACIONALIDAD) {
this.nombre = NOMBRE;
this.goles = GOLES;
this.equipo = EQUIPO;
this.nacionalidad = NACIONALIDAD;   
}

var maxJugadores = prompt("Cantidad de jugadores a registrar:   ");

while (cantidadRegistrados < maxJugadores) {
        var nombre = prompt("ingresa el nombre del jugador:    ");
        var goles = prompt("ingresa todos sus goles:    ");
        var equipo = prompt("ingresa el club de su vida:    ");
    var nacionalidad = prompt("ingresa su nacionalidad:    ");
    var jugadores = new futbolista(nombre, goles, equipo, nacionalidad);
    listaJugadores.push(jugadores);
    cantidadRegistrados ++
}
console.log(listaJugadores);


/* var jugadores0 = new futbolista("neymar", 343, "santos", "brasil");
var jugadores1 = new futbolista("messi", 33, "santos", "brasil");
var jugadores2 = new futbolista("cristiano", 343, "santos", "brasil");
var jugadores3 = new futbolista("HAZARD", 343, "santos", "brasil");
var jugadores4 = new futbolista("Camilo", 343, "santos", "brasil"); */



var misJugadores = [];
function filtroFutbolista(ObjetoJugador) {
for (i = 0; i < cantidadJugadores;i++){
misJugadores.push(ObjetoJugador);
console.log( misJugadores[i]);
}
};

// aqui termina segunda 2 solucion de segundo ejercicio


//asi lo soluciono la IA📃📃📃📃📃:

function imprimirElementos(objeto) {
    // Verificar si el objeto es iterable
    if (objeto && (typeof objeto === 'object' || typeof objeto === 'function')) {
        // Iterar sobre los elementos e imprimirlos
        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                console.log(objeto[clave]);
            }
        }
    } else {
        console.log("El objeto no es iterable");
    }
}

// Ejemplos de uso
let arrayEjemplo = [1, 2, 3, 4, 5];
imprimirElementos(arrayEjemplo);

let objetoEjemplo = { a: 10, b: 20, c: 30 };
imprimirElementos(objetoEjemplo);
























//Aqui cree un arrego de arreglos(se me parece a un objeto):
var carros = [];
var marcas = [];
var annio = [];

function llenarInfoAutos(arrayCarros, arrayMarcas, arrayAnnio) {
    var carros = arrayCarros; 
    var marcas = arrayMarcas;
    var annio = arrayAnnio;

    var listaVehiculos = [arrayCarros,arrayMarcas,arrayAnnio,];
    
    return (listaVehiculos)
}


