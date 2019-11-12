
let popup = document.querySelector('.popup')
let x = document.querySelector('.close')
let submit = document.querySelector('.submit')


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

popup.addEventListener('click', divShow )
x.addEventListener('click', divHide )
submit.addEventListener('click', checkEmpty)   