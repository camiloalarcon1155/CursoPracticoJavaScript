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
    //if, switch,
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



🤷‍♀️//2da solucion::


function tomarCurso(tipoDeSuscripcion) {
 
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
} if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
     return;
} if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
     return;
} if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
     return;
}
    console.warn("Abralo papi, escriba la palabra que es")
}


//fue la misma respuesta que la IA

👌👌👌👌//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏


//asi lo hizo platzi:

//crera un objeto:
const tiposDeSuscripcion = {//creamos un objeto. cada elemento va a ser un mensaje que imprtimimos por cada suscripcion y el nombre clave va a ser el nombre de la suscripcion.
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"

}; 

/* const ejemploSuscripcion = "Free"


tiposDeSuscripcion[ejemploSuscripcion] */

//creamos una funcionm para ... enviar el nombre clave, osea el tipo de suscripcion y que de acuerdo a eso me envie el mensaje corresponiendte

function conseguirTiposDeSuscripciones(suscripcion) {
    if (tiposDeSuscripcion[suscripcion]) {
        console.log((tiposDeSuscripcion[suscripcion]))
        return //hacemos un return para que la funcion si esntra aca, se detenga al terminar de ejecurtarse
    }
    console.warn('Ese tipo de suscripcion no existe')// si no se cumple la condicion de arriba, se ejecutara este anuncio inmediatamente 
}

//ahora la llamamos:

conseguirTiposDeSuscripciones('Expert')

//pero asi lo hizo la IA📃📃📃📃📃📃📃📃📃

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

//mi solucion:
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
var carros = [];//no era necesario
function imprimirElemento(arrayCarros) {
    var carros= arrayCarros 
    return (carros[0])
    // return arrayCarros[0], se podia directamente 
}
// lo cargas en consola del navegador y luego llamas a la funcion imprimirElemento con el array dentro
imprimirElemento(["r", 2, 3, 4, 5])
    
🍀🍀🍀//otro ejercicio

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno(no se vale imprimir el array completo).

//mi solucion:

var carros = [];

function imprimirElemento(arrayCarros) {
    var carros = arrayCarros; 

    for (var i = 0; i < carros.length; i++){ //poner mejor let
    
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

//llamamos a la funcion:
imprimirElemento(perros)
//y ya imprime cada elemento.(no tengo idea si esta bien)


/* 
for (var i = 0; i < perros.length; i++){
    
        console.log(perro[i]);
        //return perro[i];
};
       // i++;

 */
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

    console.log(ObjetoJugador.nombre);// esta solucion podria ser, pero no es optimqa, no se por que ajaj en la siguiente solucion esta de la forma correcta
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



//solucion 2 (con object.values(objeto))



function futbolista(NOMBRE, GOLES, EQUIPO, NACIONALIDAD) {
this.nombre = NOMBRE;
this.goles = GOLES;
this.equipo = EQUIPO;
this.nacionalidad = NACIONALIDAD;   
}

var misJugadores = [];
function filtrarFutbolista(ObjetoJugador) {

    let arregloDeObjeto = Object.values(ObjetoJugador);//objec.values convierte de objeto a arreglo
    //pero tambien existe object.kiss algo .entris y otros mas (preguntarle a IA)
    for (let i = 0; i < arregloDeObjeto.length; i++) {
        console.log(arregloDeObjeto[i]);
    }
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



//fin solucion 2


//la solucion anterior es buena, pero sin tanrta cosa esta en el .md de la carpeta descargada de platzi de4 este mismo curspo.

//solucion 3 ejercicio(queda pendiente):
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

// aqui termina segunda 3 solucion de segundo ejercicio


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


//aqui termina ejercicio de la IA 📃📃📃



👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
//de ahora en adelante vamos a ver las soluciones de platzi para cada ejerccio:
/* 
ya hay un .md donde etsan las respuestas. aqui pondremos algunas notas sobre esas solucioones.

- es mejor usar let y no var, var tiene algunos inconvenientes.

-las variables contantes tienen valores constantes y no se pueden cambiar.

-declara una variable, inicializar es darle un valor y reiniciarlizar es cambiar su valo0r

-let sumaStrings = "hola, " + "pedro"; // me sumaria esas 2 pàlabras



NOTA IMPORTANTE. 🙌 tenia unda duda sobre como usar el return de una funcion. y la solucion o respuesta es quue se puede reinicializar una variable o inicIalizar una variable y asignarle esa funcion con sus aRGUMENTOS, asi esa variable obtemndra el reoturn.


los navergadortes nos dsan unsas fuinciones pòr defecto como: comnsole.log
console.warm. console.alert. cosole.table

AQUI TERMINA NOTAS DE ejercicios hast avideo 9 de cursopractico de java script
 */

//vamos a hacer conceccion de java script con html

//en node.js es de otra forma como se relizan codigo de coneccion con java script, prro para temas de java script html y el navegador sera como se moostrara en las siguiemntes clsases:





//🍀🌹🌹🌹🌹🌹🌹🌹inicio a hacer conexion con github///////////////////
//le dampos en git al iniciar: ls-lf
//luego creamnos el .gitignore y ponemos archivos vistos con ls -lf
//entramos a gitignore.io y creamos nuestro gitignore, solo hay que listarlos: macos, windows, linux, vscode, node.
//AHORA cuando nos cree nuestro documento, copiamos y pegamos en nuestrto documento y luegio hacemos git add .gitignore, y despues si hacemos git add .
//para que ignore carpeta tambien, entonces ponemos ejemplo: .vscode(es de la carpèta que contiene el archivo) y vscode/*(es del archivo)
//de nuegvo adcionamos solo el gitignore y luego ya el git add . (git add -A)
// luego git -m "mi mensaje"

//con git remote -v miramos is hay algun repositorio remoto
//luego cambiamos nuestra rama master a main en git
//luego ya hacemos conexion con la htttp  de git hub
//luego hacemos git push -u origin main, con -u la primera vez y despues ya no.


//creamoa un repositorio llamado gitHubEnJavaScript
//creamos readme.md directamente desde github
//TAMBIEN CREAMOS el gitignoere con node.js
// y cresamos la license MIT
//y crear
//luego entramos a la carpeta en directoprio local y le dampos git clone + la direccion del direcctorio remoto.
//entramos a la carpeta y le damos ls -lf

//usamos en git: code ./ -r : es como para que me permita crear un sitio de una en mi vs code para ese proyecto, sin ir a abrir mas carpetas
//para ignorar otro docuemnto, vamos a gitignore y al final del archivo ponemos:
//# Editor
//.vscodels
//luego le damos git add .gitignore
//y git commit
// por ultimo hacemos git push y observamos en github si se subio

//🎉🎉🎉 vamos  a tomar un proyecto de gitHub y vamos a contribuir en el

//vamos a hacer un fork
//vamos a forkear el proyecto llamado Curso practico de frontend developer de la profe Estefany aguilar, que solo tiene css y html y le vamos a hacer manipulacion del dom con java script

//y al final del curso le haremos pull request

// recordar que podemos crear carpetas e ignorarlas

// para siguientes cursos comenzamos a trabajar en /c/Users/Camilo/Desktop/Platzi/cursoPracticoJavaScript/proyectoFrontDevelopmentConJavaYgitHub/curso-frontend-developer-javaScript, donde estos tienen repositorio propio llamado curso-frontend-developer-javaScript que esta mi propio repositorio



//git commit --amend --no-edit
//para mantener el mensaje
//luego git push --force origin main

//para camnbiar nombre de branch:
//git branch -m <nombre_antiguo> <nombre_nuevo></nombre_nuevo>

//i necesitas también cambiar el nombre de la rama en el repositorio remoto, deberás eliminar la rama remota con el nombre antiguo y luego volver a empujar la rama con el nombre nuevo. Puedes hacerlo con los siguientes comandos:

//git push origin --delete <nombre_antiguo>
//git push origin <nombre_nuevo>

//ahora para deshacer un commit
//git reset --hard <hash_del_commit_anterior>

/* En CSS, position: absolute es una propiedad que se utiliza para posicionar un elemento de manera absoluta dentro de su contenedor más cercano que tenga una propiedad de posición relativa, absoluta o fija. Cuando un elemento tiene position: absolute, se posiciona con respecto a las coordenadas especificadas usando las propiedades top, right, bottom y left. */

//🎈🎈🎈🎈nota importante:
//desktopMenu.classList.toggle('inactive'); me sirvio para hacer aparecer o desaparecer un menu poniendole a ese menu en css :
 .inactive {
            display: none;
}/* es util para usarla en java script */
        
//🎈🎈

//cursor:pointer; cambia a puntero

//🥩🥩🥩//para copiar un archivo en git:

//cp fusionComponentes.html fusionComponentesMobile.html
//luego se hace commit para que topdo quede guardado
//cree copias de fusion componentes para ahora trabajarlo en la version mobil, para que mi trabajo quede todo guardado
//🥩🥩🥩

//poara renombrar archivos en git:
//git mv fusionComponentesMobile.css fusCompMobil.css
//luego git add y comm y pushh

  🌹//me parece importante esto:
   .desktop-menu {
                display: none;
} // es lo mismo que 
    .inactive {
                display: none;
}
//ESO SE LO PONE AL @MEDIA  pàra que desaparezca en anchos determinados

//lo que se hizo hasta aqui fue unir codigo de clase 8  de desarrollo frontend a nuestro trabajo, usamos fusCompMobil .css .js .html y ya tenemos el menu de ordenes anclado, el menu de mobil ejecutandose y aparecen y desaparecen de acuerdo al ancho de pantalla. video 20 terminado


//😁😁😁😁Importante: Si he hecho cambios en un archivo y me aparece en el git que se hicieron cambios, pero no deseo esos cambios, por que ni sisquiera se que cambios son y aun no han siddo agregados al stagging, le doy:

git checkout-- clase13.html // clase13 es mi archivo.

//si mis archivos ya han sido agregados al stagging, entonces lo quie hacemos es 
 git reset HEAD clase13.html
//...sacrlo del staging y luego:
git checkout-- clase13.html
//..deshacer esos cambios del archiovo



//la etiqueta aside, ademas del carrito de compras, tambien sirve para detalles de un producto. (foto mas grande del productom, precio y cosas)


//una forma rapida de recorrer un arreglo:

for (product of productList) {
    console.log(product.name)
};// con of me imprime el name por ejemplo, pero con in...

for (product in productList) {
    console.log(product)
};// me imprime el indice de cada producto

//ver archivos fusAgregProds de : proyecto forkeado cd /c/Users/Camilo/Desktop/Platzi/cursoPracticoJavaScript/proyectoFrontDevelopmentConJavaYgitHub/curso-frontend-developer-javaScript
// ahi se muestra todo el proceso de renderizado de unm elemento HTML, desde java script, es el video 22 de curso practico de java script



// seguimos trabajando en proyecto desarrollador web , estamos mejoranddo el menu que despliega las caracteeristicas de cada orden. ya nos despliega la info de cada orden y nos muestra su contenido, ya aparece en el elspacio que deberia y ya funcionan su css correctamente. pero ese menu hace parte del 2 aside del proyecto, que pertenece a la clase 12 del mismo, dado en el curso de front development. entonces aside 1 y aside 2 tenian los mismos nombres de clases y toco que cambiarlos para cada uno y modificar este nombre en java script para el aside 1 y en css para el aside 2(a l aside 2 aun no le hacemos modicicaciones en java script para que aparezca cuando le damos click a cada compra, eso se hara en video 24 del curso.)

// lo unico diferente al profe de platzi quwe llevamos npostros hasta aquii , es que modificamos estos dos nombres :

/*  .product-detail-close { --> original
   #productDetail .product-detail-close {

    .product-detail-close:hover { --> original
    #productDetail .product-detail-close:hover {
      */



// git clean -f detCadaCompra.css sirve para borrar un archivo desde git, aunque no este siendo seguido por git


💧💧😲
// El método setAttribute() no está disponible en la interfaz DOMTokenList, que es lo que devuelve classList. Por lo tanto, no puedes utilizar setAttribute() directamente en un objeto de classList.

// El método setAttribute() se utiliza para establecer un atributo en un elemento HTML, no para manipular clases CSS. En cambio, classList proporciona métodos específicos para trabajar con clases CSS, como add(), remove(), toggle(), etc.

//Hasta aqui ser termino el video 24 y ya todos los menus se pueden desplegar completamente. aunque aun hay muchas cossas por  hacer como que al darle click en mi orden ya me aparezcan loa fotos de todas las ordernes y que se desplieguen mas menus. me quedo una pequeña duda con el uso del toogle y el condicvoonal if, por que en la mayoria de fucnionesq que hicismo se uso if y toogle, pero en open y en close se cerro de una el menu, pero el dice que eso se puiede hacer es por que despues se usaba add, remove y no toogle, aunqie revise y hace lo mismo, quienm sabe...




// ahora ya teniemndo tod el proyecto , hacemos el pull request con esta info

/* 
Agregamos los archivos desplegCadaCompra.html, desplegCadaCompra.css y desplegCadaCompra.js para fusuionar todos los componentes de la vista principal:

archivos / componentes qeu fusionamos:

- clase11.html (menu  general)
- clase7.html (menu desktop)
- clase8.html (menu mobile)
- clase6.html (lista de productos)
- clase12.html (detalles de cada producto)

gracias a la fusion los usuarios pueden utilizar el menu de navegacion con tosdos los componentes. funciona en mobile, desktop, con el carrito de compras y los detalles de un producto, ademas de renderizar la lista de productos a partir de un array (hardcodeado)

todos los compomentes se probaron individualmente y en conjunto para que los usuarios tengan una buena experiencia :D */

// y bueno, video 25 terminado

//en video 26 era subir el proycto y conocer otros prtoyectos(terminado)

// en video 27 es ir a pages, por setting en nuestro repositorio.

//no tocar choose a theme, ese es para cuando queremos lleer un readme, algo asi dijo

//elegimos rama main y root y save
// Y YA TE genera la url de dond epuedes ver tu page

// al link que nos de le escribimos el nombre del archivo  para que ya nos lo muesttre

//https://camiloalarcon1155.github.io/curso-frontend-developer-javaScript/desplegCadaCompra.html

// luego vamos a al pull request de nuevo y le enviamos la pagina para que ella lo vea

// eso es todfo el curso, pero ahora lo que haremos sera modificar nuestro proyecto, darle una personalizacion en una rama que see llamara camkat


//😜😜 Para crear una nueva rama en Git, puedes utilizar el siguiente comando en tu terminal o línea de comandos:

//git checkout -b nombre_de_la_rama


//😁😁😁😁Importante:

//RECORDAR USAR4 ESTO SIEMPRE EN css:

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html{
    font-size: 62.5%;
}

/// mi primera idea ahora es ponerle un titulo para el contenido que se vaya a mostrar la seccion main container, osea en la lista de productos, pero eso me lleva a pensar que puedo mostrar en el main ropa camisetas, ropà jeans, ropa pantalonetas y asi. inclsuo lo que hare es que haya una funcion o condicional que de acuerdo a mi arreglo o de acuerdo al  event listener, entonces me llame la funcion de renderizar ya sea las camisetas, chaquetas o jeans o y todo y que dea cuerdo a lo quese despliegue, entonces aparezca el titulo con el nombre general de las prendas.


// ESTO E SLO QUE HARÉ: voy a escuchar click s con el addevenlistener y por cada evenlistener voy a llamr a la funcion  llamarRenderizado, en esta funcion creo un switch para evaluar cada caso, en cada caso pongo a evaluar que boton presiono, de acuerdo a cada boton pongo el titulo h1 en el maincontainer y llamo a la funcion renderizar con su arreglo correspondiente.


//💕💕💕NOTA IMPORTANTE: no se deben llamar a la funciones con su argumento directamente en el addevenlistener por que se ejecutan de una.


//para resaltar borde cuando pase el cursor:
 
.navbar-email:hover {
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
}

// pero esta propiedad no se puede ver en los estilos del navegador por que es una psudoclase
        

//💥💥💥💥🏍🏍🏍🏍🏍🏍🏍🏍🏍🏍 esta funcion fue ideal paara obtener el valor de un elemento de un areglo creado con java script: 
  productImg.addEventListener('click', ((obj) => {
    return function() {
        DesplegableCompra(obj); //permite obtener la variable inmediatamente cuando se le da click
    };
  })(product));//llamada FUNCION DE CIERRE
//Aquí se utiliza una técnica de cierre (closure) para capturar el valor de product en el momento en que se agrega el event listener.
//me permite agregarle un cierre a la funcion inmediatamente se le da click para que tome directamente el dato y lo envie, sin que siga correindo un for.

// explicacion:

// Esta es una función de flecha anidada dentro de otra función. Vamos a desglosarla paso a paso:

// ((obj) => { ... })(product): Esto define una función de flecha que toma un argumento obj. La sintaxis ((argumento) => { ... })(valor) se conoce como "IIFE" (Immediately Invoked Function Expression), que significa "Expresión de Función Inmediatamente Invocada". En este caso, product es pasado como argumento al IIFE.

// return function() { ... }: La función de flecha interna definida dentro del IIFE es la función que se ejecutará como manejador de evento cuando se dispare el evento de clic en productImg. Esta función no toma ningún argumento y simplemente llama a DesplegableCompra(obj) con el argumento obj.

// Entonces, en resumen, esta estructura crea una función de cierre que captura el valor de product en el momento en que se declara la función, asegurando que este valor se mantenga constante y se pase correctamente como argumento a DesplegableCompra cada vez que se haga clic en un producto.


