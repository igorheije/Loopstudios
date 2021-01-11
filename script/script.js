const img = document.querySelector('.main-img')
const info = document.querySelector('.main-info')
const card = document.querySelectorAll('.card')
const modal = document.querySelector('#modal')
const ul = document.querySelector('#ul')
const modalItem = document.getElementsByClassName('modal-item')

const getWindowBottom = () => {
    const teste = window.scrollY + window.innerHeight
    if(teste>800){
        img.classList.add('esquerda')
        info.classList.add('direita')
    }
    card.forEach((card, i)=>{
        if(teste>1300+i*50){
            if(i%2===0){
                card.classList.add('esquerda')
            }else{
                card.classList.add('direita')
            }
        }
    })
}
const windowWidth = window.innerWidth;
function mobile(){
    if(windowWidth<550){
        if(modal.classList.value==='active'){
            modal.classList.remove('active')
            document.getElementById('modal-img').src = "./images/icon-hamburger.svg"
            ul.style.display = 'none'
        }else{
            modal.classList.add('active')
            document.getElementById('modal-img').src = "./images/icon-close.svg"
            ul.style.display = 'flex'
        }
    }
}

document.addEventListener('scroll',getWindowBottom)

