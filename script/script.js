const anima = window.innerHeight
const scrollY = window.scrollY
const img = document.querySelector('.main-img')
const info = document.querySelector('.main-info')
const card = document.querySelectorAll('.card')
const getWindowBottom = () => {
    const teste = window.scrollY + window.innerHeight
    if(teste>800){
        img.classList.add('esquerda')
        info.classList.add('direita')
    }
    console.log(card);
    
    card.forEach((card, i)=>{
        if(teste>1200+i*100){
            if(i%2===0){
                card.classList.add('esquerda')
            }else{
                card.classList.add('direita')
            }
    }
    })
    
}

document.addEventListener('scroll',getWindowBottom)

