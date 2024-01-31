const h1Titulo = document.querySelector('h1'); 

const h2 = document.querySelector('h2');
const parrafo1 = document.querySelector('p');
const parrafo2 = document.getElementById('perron');
const parrafo3 = document.getElementsByClassName('parrito');
const formulario = document.querySelector('#formularioMiCasa');
const input1 = document.querySelector('#dato1');
const input2 = document.querySelector('#dato2');
const btnCalcular = document.querySelector('#BOTNsumarDatos');
const pResultado = document.querySelector('#resultado');


formulario.addEventListener('submit', sumarInputValues);//cambiamos el click por submit, por que es un formulario, ya no es para el boton. 

//para el boton, el parametro es el eevento que se quiere escuchar, en este caso cuando escuche un click// y luego mandamos a llamar la funcion tal(no se pone en parentesis la funcion a llamar, por que el addevenlistenner se los pone)


//para escuchar el bpotomn que creamos en html, creamos una funcion que se ejecute asi:

function sumarInputValues(event) {
    //console.log({ event });
    event.preventDefault();//este😎😎😎😎lo activamos para que por defecto no ejecute lo que deberia ejhecutar el evento submit.  y asi el fin de l formulario no nos envie a otra ruta y/o nos recargue la pagina. y ya poder hacer olas cosas que nosotros quram0s
    let valorDato1 = parseInt(input1.value);
    let valorDato2 = parseInt(input2.value);
    
    let suma = valorDato1 + valorDato2;
    //let suma = input1.value + input2.value;
    console.log(suma);
    pResultado.innerText = "Resultado: " + suma;
}

//modificamos para que cuando se enfoque el cursor en entrada 1 este de un color y cuando se cambie a otro lado el click cambiara a otro color
input1.addEventListener("focus", (event) => {
  event.target.style.background = "green";
});

input1.addEventListener("blur", (event) => {
  event.target.style.background = "blue";
});
//

//modificamos para que cuando se pase el cursor  en boton calcular, tenga un color y si se quita, cambie a otro color
btnCalcular.addEventListener("mouseover", (event) => {
  event.target.style.background = "grey";
});

btnCalcular.addEventListener("mouseout", (event) => {
  event.target.style.background = "black";
});

//
//adicione un addeventListener para que cuando se le de click al boton, automaticamnte cambie de color el fondo de p de resultado  y su letra
btnCalcular.addEventListener('click', cambiarColorResultado);

function cambiarColorResultado() {
    pResultado.style.background = "black";
    pResultado.style.color = "white";

} //💖no uso el event por que voy a cambiar un atributo de otra cosa, no de la misma etiqueta que voy a clickear

/* 
Ya tienes en JavaScript una variable que selecciona un elemento HTML. ¿Cuál de las siguientes herramientas te permite editar su contenido?

a
innerText

b
append

c
innerHTML

d
👌👌👌👌Todas las respuestas son correctas.

e
appendChild */