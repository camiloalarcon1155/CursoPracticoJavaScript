// Aqui continuamos con curso practico de java scrip, el cual inicio con curso basico de javascript: good look!!



/* ## ejercicio 1

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
 */




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


