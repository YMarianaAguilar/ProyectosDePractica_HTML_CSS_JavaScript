//Selecciono elementos del DOM
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//Establecezco una variable de Estado:
//Mantiene un seguimiento del círculo "activo"
//Comienza en 1, lo que significa que el primer círculo es el activo al inicio
let currentActive = 1

const update = () => {
    circles.forEach((circle, index) => {
        /*if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }*/
        
        (index < currentActive)
            ? circle.classList.add('active')
            : circle.classList.remove('active')
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})