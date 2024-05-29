const btnUno = document.querySelector('#uno')
const btnDos = document.querySelector('#dos')
const btnTres = document.querySelector('#tres')
const btnSuma = document.querySelector('#suma')
const btnCinco = document.querySelector('#cuatro ')
const btnSeis = document.querySelector('#cinco')
const btnSiete = document.querySelector('#seis')
const btnMulti = document.querySelector('#multi')
const btnNueve = document.querySelector('#siete')
const btnDiez = document.querySelector('#ocho')
const btnOnce = document.querySelector('#nueve')
const btnDivi = document.querySelector('#divi')
const btnTrece = document.querySelector('#cero')
const btnLimpiar = document.querySelector('#limpiar')
const btnIgual = document.querySelector('#igual')
const btnResta = document.querySelector('#resta')
const pantalla = document.querySelector('#consola')
const op = document.querySelectorAll('.op')
let numeroA;
let numeroB;
let operaciones;



btnUno.addEventListener('click', () => {
  pantalla.value += '1'

})

btnDos.addEventListener('click', () => {
  pantalla.value += '2'


})

btnTres.addEventListener('click', () => {
  pantalla.value += '3'

})

// SUMA
btnSuma.addEventListener('click', () => {
  numeroA = pantalla.value
  pantalla.value = ''
  operaciones = 1

})

btnCinco.addEventListener('click', () => {
  pantalla.value += '4'

})

btnSeis.addEventListener('click', () => {
  pantalla.value += '5'

})

btnSiete.addEventListener('click', () => {
  pantalla.value += '6'

})
// MULTIPLICACION 
btnMulti.addEventListener('click', () => {
  numeroA = pantalla.value
  pantalla.value = ''
  operaciones = 3
})

btnNueve.addEventListener('click', () => {
  pantalla.value += '7'


})

btnDiez.addEventListener('click', () => {
  pantalla.value += '8'

})

btnOnce.addEventListener('click', () => {
  pantalla.value += '9'
})

// DIVISION
btnDivi.addEventListener('click', () => {
  numeroA = pantalla.value
  pantalla.value = ''
  operaciones = 4

})

btnTrece.addEventListener('click', () => {
  pantalla.value += '0'

})
// LIMPIAR 
btnLimpiar.addEventListener('click', () => {
  pantalla.value = ''
})

//RESTA
btnResta.addEventListener('click', () => {
  numeroA = pantalla.value
  pantalla.value = ''
  operaciones = 2

})
// RESULTADO
btnIgual.addEventListener('click', () => {
  numeroB = pantalla.value;
  let resultado = 0;
  switch (operaciones) {
    case 1:
      resultado = parseInt(numeroA) + parseInt(numeroB);
      pantalla.value = resultado
      break;
    case 2:
      resultado = parseInt(numeroA) - parseInt(numeroB);
      pantalla.value = resultado
      break;
    case 3:
      resultado = parseInt(numeroA) * parseInt(numeroB);
      pantalla.value = resultado
      break;
    case 4:
      resultado = parseInt(numeroA) / parseInt(numeroB);
      pantalla.value = resultado
      break;

    default:
      resultado = 0;
      numeroA = 0;

  }
})









