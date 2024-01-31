const h1Titulo = document.querySelector('h1'); 

const h2 = document.querySelector('h2');
const parrafo1 = document.querySelector('p');
const parrafo2 = document.getElementById('perron');
const parrafo3 = document.getElementsByClassName('parrito');

const input1 = document.querySelector('#dato1');
const input2 = document.querySelector('#dato2');
const btnCalcular = document.querySelector('#BOTNsumarDatos');
const pResultado = document.querySelector('#resultado');



//PARA MI IMAGEN
const img = document.createElement("img");
img.setAttribute("src",'https://i.pinimg.com/474x/de/36/e9/de36e901d61f4d0393191738f82f5032.jpg');
parrafo2.append(img);
////////////////

//para escuchar el bpotomn que creamos en html, creamos una funcion que se ejecute asi:

function btnOnclick() {
    let valorDato1 = parseInt(input1.value);
    let valorDato2 = parseInt(input2.value);
    
    let suma = valorDato1 + valorDato2;
    //let suma = input1.value + input2.value;
    console.log(suma);
    pResultado.innerText = "Resultado: " + suma;
}