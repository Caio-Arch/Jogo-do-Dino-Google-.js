const Dino = document.querySelector('.Dino');
const Fundo = document.querySelector('.Fundo');
let ispulando = false;
let position = 0;

function handlekeyUp(event){
    if (event.keyCode === 32){
        if(!ispulando){
        pular();
        }
    }
}
function pular() {
    ispulando = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let dowInterval = setInterval(() =>{
                if(position <= 0) {
                clearInterval(dowInterval);
                ispulando = false;
                }else{
                  position -= 20;
                  Dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
        position += 20;
        Dino.style.bottom = position + 'px';
        }
        Score = Score
    }, 20);
}

function criandoCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    Fundo.appendChild(cactus);

    let leftInterval = setInterval(() =>{
        if (cactusPosition <= -60){
            clearInterval(leftInterval);
            Fundo.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition< 60 && position < 60){
                 
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">fim de Jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(criandoCactus, randomTime);
}


criandoCactus();
document.addEventListener('keyup', handlekeyUp);