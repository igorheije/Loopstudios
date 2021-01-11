const img = document.querySelector('.main-img')
const info = document.querySelector('.main-info')
const card = document.querySelectorAll('.card')


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

document.addEventListener('scroll',getWindowBottom)

