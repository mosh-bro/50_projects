const progress = document.getElementById(progress)
const prev = document.getElementById(prev)
const next = document.getElementById(next)
const circles = document.querySelectorAll(".circles")

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.legth) {
        currentActive = circles.legth
    }
    console.log(currentActive)
})