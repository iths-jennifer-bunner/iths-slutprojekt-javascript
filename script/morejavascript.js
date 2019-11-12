let arrowUp = document.querySelector('.backtotop')
let toGallery = document.querySelector('.gallery')
let toEvents = document.querySelector('.events')
let toAbout = document.querySelector('.aboutme')

let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')

//----------------------------------------------------

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

//------------------------------------------------------

function readMore(){
    let dots = document.querySelector('.dots')
    let buttonText = document.querySelector('.button')
    let moreText = document.querySelector('.more')
    let biggerAbout = document.querySelector('.about')

    if(dots.style.display == 'none'){
        dots.style.display = 'inline'
        buttonText.innerText = 'Read more'
        moreText.style.display = 'none'
        biggerAbout.style.height = '300px' 
    }else{
        dots.style.display = 'none'
        buttonText.innerText= 'Read Less'
        moreText.style.display = 'inline'
        biggerAbout.style.height = '800px' 
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
        biggerEvent.style.height = '300px'
    }else{
        dots.style.display = 'none'
        buttonText2.innerText= 'Read Less'
        moreText.style.display = 'inline'
        biggerEvent.style.height = '700px'
    }
}

arrowUp.addEventListener('click', scroller)
toGallery.addEventListener('click', scrollToGallery)
toEvents.addEventListener('click', scrollToEvents)
toAbout.addEventListener('click', scrollToAbout)

button.addEventListener('click', readMore)
button2.addEventListener('click', readMore2)

