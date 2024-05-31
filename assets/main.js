let botones = document.querySelectorAll('.btns')
let accion = document.querySelectorAll('.op')
let pantalla = document.querySelector('#consola')
let numeroA;
let numeroB;
let acumulador;
let signo;
let acumuladorMulti = 1
let acumuladorDivi;
let acumuladoA;

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    pantalla.value += btn.value

  })

})


accion.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.value == '+' || e.target.value == '-' || e.target.value == '/' || e.target.value == '*') {
      numeroA = parseInt(pantalla.value)
      switch (e.target.value) {
        case '+':
          acumulador = acumulador + numeroA
          break;
        case '-':
          acumulador = numeroA - acumulador
          break;
        case '*':
          acumuladorMulti = acumuladorMulti * numeroA
          break;
        case '/':
          if (acumuladorDivi == 0) {
            acumuladoA = parseInt(numeroA)
            acumuladorDivi++
          }
          else if (acumuladorDivi > 0) {
            acumuladoA = acumuladoA / numeroA
            numeroA = acumuladoA
          }


          break;
      }
      signo = e.target.value
      pantalla.value = ''
    }

    else if (e.target.value == '=') {
      if (signo == '+') {
        numeroB = parseInt(pantalla.value)
        let resultado = acumulador + numeroB
        pantalla.value = resultado
      } else if (signo == '-') {
        numeroB = parseInt(pantalla.value)
        let resultado = acumulador - numeroB
        pantalla.value = resultado
      } else if (signo == '*') {
        numeroB = parseInt(pantalla.value)
        let resultado = acumuladorMulti * numeroB
        pantalla.value = resultado
      } else if (signo == '/') {
        numeroB = parseInt(pantalla.value)
        let resultado = numeroA / numeroB
        pantalla.value = resultado
      }
      acumulador = 0;
      acumuladorMulti = 1;
    }
    else if (e.target.value == 'C') {
      pantalla.value = ''

    }

  })


})










