const botonNumeros = document.querySelectorAll('#button-number');
const botonOperadores = document.querySelectorAll('#operator');
const borrarNumeros = document.querySelector('#flecha-button');
const limpiarboton = document.querySelector('#C-button');
const limpiarNumeros = document.querySelector('#CE-button');
const equal = document.querySelector('#equal-button');
let boxNumber = document.querySelector('#box-container');

let arrayNumeros = [];
let arrayNumerosEditado = [];
let numerosString;
let operador;
let numero1;
let numero2;

agregarNumeros();
editarNumeros();
guardarNumeros();
limpiar();
resultado();

function agregarNumeros() {
   botonNumeros.forEach(button=>{
    button.addEventListener('click',()=>{
      arrayNumeros.push(button.innerText);
      numerosString = arrayNumeros.join("");
      boxNumber.innerText = numerosString;
    })
   })
}

function editarNumeros() {
  borrarNumeros.addEventListener('click', ()=>{
    arrayNumeros.pop();
    numerosString = arrayNumeros.join("");
    boxNumber.innerText = numerosString;
  })
}

function guardarNumeros() {
 botonOperadores.forEach(button=>{
  button.addEventListener('click',()=>{
    if(!numero1) {
      numero1 = parseInt(numerosString);
      console.log("numero1=" + numero1);
      arrayNumeros = [];
      numerosString = "";
      resultado = numero1;
      console.log("Resultado="+resultado);
      
    } else {
      numero2 = parseInt(numerosString);
      arrayNumeros = [];
      console.log("numero2=" + numero2);
    }
    operaciones();
    operador = button.innerText; 
  })
 })
}

function operaciones(){
  if(operador ==="+") {
    resultado = numero1 + numero2;
    numero1 = resultado;
    numero2 = "";
    boxNumber.innerText = resultado;
  } 
  if(operador ==="-") {
    resultado = numero1 - numero2;
    numero1 = resultado;
    numero2 = "";
    boxNumber.innerText = resultado;
  } 
  if(operador ==="*") {
    resultado = numero1 * numero2;
    numero1 = resultado;
    numero2 = "";
    boxNumber.innerText = resultado;
  } 

  if(operador ==="/") {
    resultado = numero1 / numero2;
    numero1 = resultado;
    numero2 = "";
    boxNumber.innerText = resultado;
  } 
  
}

function limpiar() {
  limpiarboton.addEventListener('click', ()=>{
    boxNumber.innerText = '';
    arrayNumeros = [];
    numerosString="";
    resultado = "";
    numero1 ="";
    numero2 ="";
    operador = "";
    
  })
  
}

function resultado() {
  equal.addEventListener('click', ()=>{
 if(!numero2) {
  resultado = numero1
 } else {
  resultado = numero1 + numero2
 }

 boxNumber.innerText = resultado;
    
  })
  
}