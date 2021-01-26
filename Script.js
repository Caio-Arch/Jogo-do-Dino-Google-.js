const Dino = document.querySelector('.Dino');
const Fundo = document.querySelector('.Fundo');
let ispulando = false;

function handlekeyUp(event){
    if (event.keyCode === 32){
        if(!ispulando){
        pular();
        }
    }
}
function pular() {
    let position = 0;
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
    }, 20);
}

function criandoCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    Fundo.appendChild(cactus);
}

criandoCactus();
document.addEventListener('keyup', handlekeyUp);