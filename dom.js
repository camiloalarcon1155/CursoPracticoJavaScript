const h1Titulo = document.querySelector('h1'); // nos pide que seleccionemos las etiquetas con las que queremos trabajar

const h2 = document.querySelector('h2');
const parrafo1 = document.querySelector('p');
const parrafo2 = document.querySelector('#perron');
const parrafo3 = document.querySelector('.parrito');
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
parrafo1.setAttribute('class','rojo'); // si vamos y inspeccionamos el p que es parrafo1 en nuestro java scrip, su valor de atributo sera rojo.