const h1Titulo = document.querySelector('h1'); // nos pide que seleccionemos las etiquetas con las que queremos trabajar

const h2 = document.querySelector('h2');//cuando se usa query si se pone . # + el nombre de la etiqueta
const parrafo1 = document.querySelector('p');//o si no le pusiste identificador, sol ole poners la etiqueta
const parrafo2 = document.getElementById('perron');// en este caso ya estas diciendo que lo identifique por ID, asi que no tienes qu poner # para id ni el . para class
const parrafo3 = document.getElementsByClassName('parrito');
const input = document.querySelector('input');

console.log({ //TRUquito para que intyerprete todo como un objeto y imprima sus valores:

    h1Titulo,
    parrafo1,
    parrafo2,
    parrafo3,
    input,
});

//tamnbien podioa poner asi:

console.log(h1Titulo)//, pero de esta forma no nos muestra bioen sus propiedades y ver como manioularlas
//ejemplo: de input podemos biscar la propiedad value asi:
 
console.log(input.value)// si llenamos el input con algo y luego ejecutamos esta linea, nos aparecera. tambien podemos poner el value desde html parta que aparezca relleno el input y que el usuario olo cambie

//ver curso de manipulacion del dom

//ahora vamos a cambiar el titulo de mi html desde aca:

h1Titulo.innerHTML = 'PELALA <br> Feo'; // Y ya se cambió. el "<br> Feo" le añade una etiqueta a la etiqueta del titulo. pero INNERHTML es peligroso poor que estamos dejando al ausuariio que dihiete html dentro de nuestro html, entponces es mejor usar inner.text

h1Titulo.innerText = 'PELALA <br> Feo'; //  AQUI CONVIERTE Todo en texto y <br> tambien apareceria
//la forma d emodificar un atributo de nuestro elemento es:

console.log(h2.getAttribute('class'));//le decimos que nos buque un atributo de ese elememto, llamado class y si existe, va a imprimir su valor

//ahora vamos a modificar el  valor de ese atributo:
parrafo1.setAttribute('class', 'rojo'); // si vamos y inspeccionamos el p que es parrafo1 en nuestro java scrip, su valor de atributo sera rojo. si ya tenia un nombre de clase, se lo cambiará.

//tambien hay :
//hay otra funcion que sirve especificamente con las clases:
h1Titulo.classList.add('rosa');// aqui le agregasmos una nuieva clase al elemento h1Titulo, no se la cambia, le agrega una mas

//tambien se la puede quitar asi:
h1Titulo.classList.remove('rosa');// y ya se la quita automaticamente
//existen otros como:  

h1Titulo.classList.toggle('rosa'); // es una forma de alternar la presencia de una clase en un elemento HTML. En este caso, parece que se está aplicando a un elemento <h1> con el objetivo de alternar la clase "rosa" en ese elemento.
//Por ejemplo, si tienes un botón en tu página web y quieres que el color de fondo de un elemento <div> cambie cada vez que haces clic en el botón, puedes usar classList.toggle() para alternar una clase que define el color de fondo deseado.

h1Titulo.classList.contains('rosa');// este devuelve true o false si elemento tiene o no la clase que le etan preguntando.

//otro ejemplo:

input.value = "456";// le asiganamos un valor a su propiedad

// para crear un elemento desde 0:
console.log(document.createElement("img"));// y lo cargamos y vamos a consola del navegador, va a haber una imagen creada.
//y para que aparezca en el html se mete en un elemento que ya exista en el html asi:


const img = document.createElement("img");//ahora vemnos donde lo ubicamos en el html,  pero antes le adiconamos otro atributo:
img.setAttribute("src",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUhJsHMpuBzR5aRzwJAD9aXoUTIfcuBk_og&usqp=CAU');

//ahora si la ponemos en el html:

parrafo2.append(img);//tajmbien existe append o appendchild, funciones muy utiles. innerHTML

//🤦‍♂️😅¿¿¿¿¿PREGUNTA IMPORTANTE????: // en el anterior codigo, cuando use pàrrafo3.appened(img); no me permitio subir la imagen, pues mi parrafo3 esta obtenido por nombre de clase desde html. cuando lo cambie por id ahi si funciono, pero me quedo la duda del por qu eno funciono para clase

//pero si quisieramos que solo quedara la imagen y se borrara el texto de parrafo2 ponriamos parrafo2.innerText= ""; y yA