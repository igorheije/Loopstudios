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
    if(teste>1600){

    card.forEach((card, i)=>{
        if(i<4){
            if(i%2===0){
                card.classList.add('esquerda')
            }else{
                card.classList.add('direita')
            }
        }
    })
    }
    if(teste>2100){
        console.log('iu');
        card.forEach((card, i)=>{
            if(i>3){
                if(i%2===0){
                    card.classList.add('esquerda')
                }else{
                    card.classList.add('direita')
                }
            }
        })
    }
}

document.addEventListener('scroll',getWindowBottom)

