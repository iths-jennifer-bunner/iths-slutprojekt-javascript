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
let popup = document.querySelector('.popup')
let x = document.querySelector('.close')
let submit = document.querySelector('.submit')
let pathname = window.location.pathname.split('/')
let rightPath = pathname[pathname.length-1]
const MOBILE_MODE = window.innerWidth < 1000


// Declare functions
if( rightPath == 'index.html'){
    if(MOBILE_MODE){
        //MOBILE
    }else{
        //DESKTOP
        for(let i = 0; i < pics.length; i++){
        pics[i].addEventListener('click', clickImage)        
    }
    close.addEventListener('click', closeImage) 
    nextbutton.addEventListener('click', next)
    prevbutton.addEventListener('click', prev)
    }
    //BOTH
    toGallery.addEventListener('click', scrollToGallery)
    toEvents.addEventListener('click', scrollToEvents)
    toAbout.addEventListener('click', scrollToAbout)
    button.addEventListener('click', readMore)
    button2.addEventListener('click', readMore2)
    
}else if(rightPath == 'contactpage.html'){  
    popup.addEventListener('click', divShow )
    x.addEventListener('click', divHide )
    submit.addEventListener('click', checkEmpty)

}


function toggle(){
    if(label.innerHTML == 'menu'){
        label.innerHTML ='close'
    }else{
        label.innerHTML ='menu'
    }
}
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

function readMore(){
    let dots = document.querySelector('.dots')
    let buttonText = document.querySelector('.button')
    let moreText = document.querySelector('.more')
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
function divShow(){  //to display pop up
    document.querySelector('.abc').style.display = 'block'
}

function divHide(){
    document.querySelector('.abc').style.display = 'none'
}

function checkEmpty(event){
    let p =document.querySelector('p.alert')
    if(document.querySelector('.name').value == '' || document.querySelector('.email').value == '' || document.querySelector('.msg').value == ''){
        p.innerText = 'Fill all fields!'
    }else{
        document.querySelector('.form').submit()
        p.innerText = 'Form Submitted Successfully...'
    }
}

label.addEventListener('click',toggle)
arrowUp.addEventListener('click', scroller)


