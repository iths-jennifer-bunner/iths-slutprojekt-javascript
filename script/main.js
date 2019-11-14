// Global variables
let prevbutton = document.querySelector('.prev')
let nextbutton = document.querySelector('.next')
let close = document.querySelector('.overlay')
let pics = document.querySelectorAll('.images')
let sliders = document.querySelectorAll('article img')
let currentIndex = 0
let arrowUp = document.querySelector('.backtotop')
let toGallery = document.querySelector('.gallery')
let toEvents = document.querySelector('.events')
let toAbout = document.querySelector('.aboutme')
let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')
let label = document.querySelector('.material-icons')

// Declare functions

function toggle(){
    if(label.innerHTML == 'menu'){
        label.innerHTML ='close'
    }else{
        label.innerHTML ='menu'
    }
}

if (window.innerWidth > 1000) { 
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

function readMore(){
    let dots = document.querySelector('.dots')
    let buttonText = document.querySelector('.button')
    let moreText = document.querySelector('.more')
    let biggerAbout = document.querySelector('.about')

    if(dots.style.display == 'none'){
        dots.style.display = 'inline'
        buttonText.innerText = 'Read more'
        moreText.style.display = 'none' 
    }else{
        dots.style.display = 'none'
        buttonText.innerText= 'Read Less'
        moreText.style.display = 'inline'
    }
}
function readMore2(){
    let dots = document.querySelector('.dots2')
    let buttonText2 = document.querySelector('.button2')
    let moreText = document.querySelector('.more2')
    let biggerEvent = document.querySelector('.event')

    if(dots.style.display == 'none'){
        dots.style.display = 'inline'
        buttonText2.innerText = 'Read more'
        moreText.style.display = 'none'
    }else{
        dots.style.display = 'none'
        buttonText2.innerText= 'Read Less'
        moreText.style.display = 'inline'
    }
}

function scroller(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToGallery(){
    window.scroll({
        top:2020,
        behavior: 'smooth'
    })
}

function scrollToEvents(){
    window.scroll({
        top: 1500,
        behavior: 'smooth'
    })
}
function scrollToAbout(){
    window.scroll({
        top: 500,
        behavior: 'smooth'
    })
}

// Initialise event listeners   
for(let i = 0; i < pics.length; i++){
    pics[i].addEventListener('click', clickImage)
}

label.addEventListener('click',toggle)
close.addEventListener('click', closeImage)
prevbutton.addEventListener('click', prev)
nextbutton.addEventListener('click', next )
arrowUp.addEventListener('click', scroller)
toGallery.addEventListener('click', scrollToGallery)
toEvents.addEventListener('click', scrollToEvents)
toAbout.addEventListener('click', scrollToAbout)
button.addEventListener('click', readMore)
button2.addEventListener('click', readMore2)



