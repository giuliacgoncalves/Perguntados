function rotateWheel(){
    console.log('oi')
    const wheel = document.querySelector(".wheel");
    const markerBtn = document.querySelector(".marker");
    let deg = 0;

    markerBtn.addEventListener('click', () => {
        markerBtn.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random()*3600);
        wheel.style.transition = 'all 10s ease-in-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    })

    wheel.addEventListener('transitionend', ()=>{
        markerBtn.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg%360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    })

    verificarResultado(deg)
};


function verificarResultado(deg) {
    if(deg >=9 && deg <=58) {
        showPurpleQuestion()
    }else if(deg >=69 && deg <=117){
        showPinkQuestion()
    }else if(deg >=128 && deg <=177){
        showRedQuestion()
    }else if(deg >=188 && deg <=237){
        showYellowQuestion()
    }else if(deg >=248 && deg <=297){
        showGreenQuestion()
    }else if(deg >=309 && deg <=357){
        showGreenQuestion()
    }
}

// Função para enviar as perguntas do tema roxo
// mostrarPerguntaRoxa(){

    // Gerar um numero aleatorio entre 0 e o tamnho da minha lista
    // Para colocar na função do calculo
    // perguntas.roxa.length

// }

// Objeto com Lista
let perguntas = {
    roxo: [
        'askd'
    ]
}
