// Global variables
let prevbutton = document.querySelector('.prev')
let nextbutton = document.querySelector('.next')
let close = document.querySelector('.overlay')
let pics = document.querySelectorAll('.images')
let sliders = document.querySelectorAll('article img')
let currentIndex = 0


// Declare functions

if (window.innerWidth > 600) { 
function clickImage(event){
    let pic = event.currentTarget.querySelector("img")
    let newValue =pic.getAttribute('src')
    currentIndex = images.indexOf(newValue)
    let div = document.querySelector('.pop-up.hidden')
    div.classList.remove('hidden')
    let newDiv = document.querySelector('.image')
    newDiv.setAttribute('src', newValue)

    let overlay =document.querySelector('.overlay.hidden')
    overlay.classList.remove('hidden')
}

function closeImage(){
    let close = document.querySelector('.overlay')
    close.classList.add('hidden')
    let div =document.querySelector('.pop-up')
    div.classList.add('hidden')
}

function createArray(sliders){
    let images = []
    for(let i = 0; i < sliders.length; i++){
        images.push(sliders[i].getAttribute('src'))
    }
    return images
}
let images
images = createArray(sliders)
let currentImage = images[currentIndex]

function next(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    currentImage = images[currentIndex]
    let newimg = document.querySelector('.image')
    newimg.setAttribute('src', currentImage)
}
function prev(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = images.length -1
    }
    currentImage = images[currentIndex]
    let newimg = document.querySelector('.image')
    newimg.setAttribute('src', currentImage)
}

}
// Initialise event listeners   
for(let i = 0; i < pics.length; i++){
    pics[i].addEventListener('click', clickImage)
}

close.addEventListener('click', closeImage)
prevbutton.addEventListener('click', prev)
nextbutton.addEventListener('click', next )


