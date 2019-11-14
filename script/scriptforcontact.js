
let popup = document.querySelector('.popup')
let x = document.querySelector('.close')
let submit = document.querySelector('.submit')
let arrowUp = document.querySelector('.backtotop')
let label = document.querySelector('.material-icons')


function toggle(){
    if(label.innerHTML == 'menu'){
        label.innerHTML ='close'
    }else{
        label.innerHTML ='menu'
    }
}

function divShow(){  //to display pop up
    document.querySelector('.abc').style.display = 'block'
}

function divHide(){
    document.querySelector('.abc').style.display = 'none'
}

function checkEmpty(){
    let p =document.querySelector('p.alert')
    if(document.querySelector('.name').value == '' || document.querySelector('.email').value == '' || document.querySelector('.msg').value == ''){
        p.innerText = 'Fill all fields!'
    }else{
        document.querySelector('.form').submit()
        p.innerText = 'Form Submitted Successfully...'
    }
}
function scroller(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



label.addEventListener('click',toggle)
popup.addEventListener('click', divShow )
x.addEventListener('click', divHide )
submit.addEventListener('click', checkEmpty) 
arrowUp.addEventListener('click', scroller)  