## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string (@fulanito)
- //
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
//mejor pomner is o es antes de pregunta.
let dineroAhorrado = 1000;
let deudas = 100;
//generalmente se ponen en  mayuscula las clases, no laa variables
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
- //nos permiten encsapsdular guyardar bloquers de codigo pàra reutilizsarlos y ejecutarlos en el futuro
- ¿Cuándo me sirve usar una función en mi código?
- //cuando tenemos variable4s con bloques de codigo muy parecido,. con cambios que podrian ser parametros yt argumentos, que pòdemos reutilizar mas de una vez en el futuro.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
- 

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
//SON LA FORMA COMO EJECUTAMOS UN BLOQUE DE CODIGOu otro dependioendo de alguina condicion o validacion-
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//if(ELSE y else if), switch. 
// el condicvional if(ELSE y else if) nos permite hacer validaciones completamente distintas  (si asi queremos), en cada validacion o condicional.  en cambio , en switch todos los casos se comoaran con la misma varioable o condicion que definicmos en el switch.
- ¿Puedo combinar funciones y condicionales?
//

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
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
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y objetos y un solo condicional. 😏



//solucion Bonus

´´´´

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

´´´´

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
- //la forma de ejecutar un bloque de codigo hasta que se cumpla una condicion. 
- ¿Qué tipos de ciclos existen en JavaScript?
// while. do while, for. 
la diferencia con el for nos es que este nos obluiiga a poner que pasa al inicio y al final que haga que variable clave cambie y se termine el ciclol. 
- ¿Qué es un ciclo infinito y por qué es un problema?
- //es cuando la validfacion de nuetros condciionales nunca se cumpkle y terinan toteando nustra aplicacion.
- ¿Puedo mezclar ciclos y condicionales?
- //aunque los ciclos son una especie de conduiionales .,, nada nos imide agregar mas condiconales.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

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


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
- //es una lista de elementos
- ejemp:
  const array = [1, 2, 3, 4, 5, 'jajaj', true, false]
- 
- ¿Qué es un objeto?
- //es una lista de eleentos, perpo cada elemento tiene un nombre clave

//ejemplo:
  
const obj = {
    nombre: 'fulanito'
    edad: 30,
    comidasFavoritas: [pollo, queso, aguacfate],
}; //nuestro objeto es una lista de elementos, y cada elemnto tiene un nombre clave, una key

- ¿Cuándo es mejor usar objetos o arrays?
  //arrays cuando lo que haremos en un elemnto, es lolo mismo quie haremos esn tosdfos los demasd(lasreglasa se piede ioncumplir). mientras quue un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.


- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//si, los arrays pueden guardar objeto0s. y los objetos pueden guardar arrrays entre sus propiedades.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// ai hubiera sidfo un objeto pudimo poner console.log(objeto.nombre[0]), pero como son arrays, no.

function imprimirElemento(arrayCarros) {
   console.log(carros[0])
};

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```