const botones = document.querySelectorAll('.btn')
const pantalla = document.querySelector('#consola')

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent

        if (boton.textContent === 'Limpiar') {
            pantalla.textContent = '0'
            
        }
        else if (pantalla.textContent === '0') {
            pantalla.textContent = botonApretado

        }
        else if (boton.id === 'igual') {
            pantalla.textContent = eval(pantalla.textContent)
       
        }
        else {
            pantalla.textContent += botonApretado
        }
       


    })
})