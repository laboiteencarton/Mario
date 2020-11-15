// Select all elements actives  
let mario = document.querySelector("#mario")
let solTop = document.querySelector("#sol-top")
let solBottom = document.querySelector("#sol-bottom")
let paysage = document.querySelector("#paysage")
let sky = document.querySelector("body")

// framerates elements > > > 
let decalage = 0

window.onload = () => {
    document.addEventListener("keydown", steps)
    document.addEventListener("keyup", stops)
}
/**
 * function for speed
 */
function steps(event){
    switch(event.key){
        case "ArrowLeft":
            mario.classList.add("mario-left")
            mario.classList.remove("mario-right")
            parallaxe()
            decalage++
            break
            case "ArrowRight":
                mario.classList.add("mario-right")
                mario.classList.remove("mario-left")
                parallaxe()
                decalage--
                break
    }
}
/**
 * function for stop 
 */
function stops(event){
    mario.classList.remove("mario-left")
    mario.classList.remove("mario-right")
}

function parallaxe() {
    solBottom.style.backgroundPositionX = (decalage * 4) + "px"
    solTop.style.backgroundPositionX = (decalage * 4) + "px"
    paysage.style.backgroundPositionX = (decalage * 2) + "px"
    sky.style.backgroundPositionX = (decalage) + "px"
}