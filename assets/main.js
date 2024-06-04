let botones = document.querySelectorAll('.btns')
let accion = document.querySelectorAll('.op')
let pantalla = document.querySelector('#consola')
let limpieza = document.querySelector('#limpiar')
let numeroA = 0
let numeroB = 0
let acumulador = 0
let signo = ''
let primeraVez = true

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    pantalla.value += btn.value

  })
})

const suma = () => {
  acumulador = acumulador + numeroA
}

const resta = () => {
  if (primeraVez) {
    acumulador = numeroA - Math.abs(acumulador)
    primeraVez = false
  }
  else if (acumulador >= 0) {
    acumulador = Math.abs(acumulador) - numeroA
  }
  else {
    acumulador = acumulador - numeroA
  }
}

const multiplicacion = () => {
  if (acumulador == 0) {
    acumulador = 1;
    acumulador = acumulador * numeroA
  }
  else {
    acumulador = acumulador * numeroA
  }
}

const division = () => {
  if (acumulador == 0) {
    acumulador = numeroA
  }
  else {
    acumulador = acumulador / numeroA
  }
}

const igual = () => {
  if (signo == '+') {
    numeroB = parseInt(pantalla.value)
    acumulador = acumulador + numeroB
    pantalla.value = acumulador
  }
  else if (signo == '-') {
    numeroB = parseInt(pantalla.value)
    acumulador = acumulador - numeroB
    primeraVez = true
    pantalla.value = acumulador
  }
  else if (signo == '*') {
    numeroB = parseInt(pantalla.value)
    acumulador = acumulador * numeroB
    pantalla.value = acumulador

  } 
  else if (signo == '/') 
  {
    numeroB = parseInt(pantalla.value)
    acumulador = acumulador / numeroB
    pantalla.value = acumulador
  }
}
accion.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if ( pantalla.value == "") {
      alert("INGRESE UN NUMERO")
    }
    else if (e.target.value != '=') {
      numeroA = parseInt(pantalla.value)
      switch (e.target.value) {
        case '+':
          if (signo != '') {
            igual();
          }
          else {
            suma()
          }
          break;
        case '-':
          if (signo != '') {
            igual();
          }
          else {
            resta()
          }
          break;
        case '*':
          if (signo != '') {
            igual();
          }
          else {
            multiplicacion()
          }
          break;
        case '/':
          if (signo != '') {
            igual();
          }
          else {
            division()
          }
          break;

      }
      signo = e.target.value
      pantalla.value = ''
    }

    else {
      igual()
      acumulador = 0;
      signo = ''
    }
  })
})

limpieza.addEventListener('click', () => {
  numeroA = 0
  numeroB = 0
  acumulador = 0
  signo = ''
  primeraVez = true
  pantalla.value = ''
})










