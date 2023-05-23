let deg = 0;
const wheel = document.querySelector(".wheel");
const markerBtn = document.querySelector(".marker");

markerBtn.addEventListener('click', () => {
    markerBtn.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random()*3600);
    wheel.style.transition = 'all 10s ease-in-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    // Para colocar um timer na função antes de executar:
    setTimeout(()=>verificarResultado(deg%360), 10000)
})

wheel.addEventListener('transitionend', ()=>{
    markerBtn.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg%360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
})

function verificarResultado(deg) {
    console.log(deg)
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
        showBlueQuestion()
    }else{
        alert("gire novamente")
    }
};

// Função para enviar as perguntas do tema roxo
// mostrarPerguntaRoxa(){

    // Gerar um numero aleatorio entre 0 e o tamnho da minha lista
    // Para colocar na função do calculo
    // perguntas.roxa.length

// }

var question = document.querySelector('#question');
// var btnOne = document.querySelector("#awnser1");
// var btnTwo = document.querySelector("#awnser2");
// var btnThree = document.querySelector("#awnser3");
var btnAns = document.querySelectorAll(".buttonAns");

function showPurpleQuestion(){
    tamList = questions.purple.length;
    randomQuestion = Math.floor(Math.random()*tamList);
    question.innerHTML = questions.purple[randomQuestion];

    listAns = answers.purple[randomQuestion];
    btnAns.forEach((btn) => {
        randomAns = Math.floor(Math.random()*listAns);
        btn.innerHTML = listAns[randomAns];
    });
};
function showPinkQuestion(){
    tamList = questions.pink.length;
    randomQuestion = Math.floor(Math.random()*tamList)
    question.innerHTML = questions.pink[randomQuestion]
};
function showRedQuestion(){
    tamList = questions.red.length;
    randomQuestion = Math.floor(Math.random()*tamList)
    question.innerHTML = questions.red[randomQuestion]
};
function showYellowQuestion(){
    tamList = questions.yellow.length;
    randomQuestion = Math.floor(Math.random()*tamList)
    question.innerHTML = questions.yellow[randomQuestion]
};
function showGreenQuestion(){
    tamList = questions.green.length;
    randomQuestion = Math.floor(Math.random()*tamList)
    question.innerHTML = questions.green[randomQuestion]
};
function showBlueQuestion(){
    tamList = questions.blue.length;
    randomQuestion = Math.floor(Math.random()*tamList)
    question.innerHTML = questions.blue[randomQuestion]
};

// Objeto com Lista
let questions = {
    purple: [
        'Qual é o esporte mais popular do mundo?',
        'Quem é o recordista mundial dos 100 metros rasos masculino?',
        'Em que país nasceu o tênis de mesa?',
    ],
    pink: [
        'Qual filme ganhou o Oscar de Melhor Filme em 2020?',
        'Qual é o filme de animação mais lucrativo de todos os tempos?',
        'Quem interpretou o personagem Tony Stark, também conhecido como Homem de Ferro, nos filmes do Universo Cinematográfico Marvel (MCU)?',
    ],
    red: [
        "Quem pintou a famosa obra 'Mona Lisa'?",
        'Qual é o movimento artístico conhecido por retratar a realidade de forma precisa e detalhada?',
        "Qual é o nome do famoso pintor espanhol conhecido por suas obras cubistas, como 'Guernica'?",
    ],
    yellow: [
        'Qual foi a primeira civilização da Mesopotâmia?',
        'Quem foi o imperador romano conhecido por ter sido assassinado no Senado romano em 44 a.C.?',
        "Qual foi o evento que marcou o início da Revolução Francesa em 1789?",
    ],
    green: [
        'Qual é o planeta mais próximo do Sol?',
        'Qual é o maior órgão do corpo humano?',
        "Qual é a unidade de medida de corrente elétrica?",
    ],
    blue: [
        'Qual é o país com a maior área territorial do mundo?',
        'Qual é o maior oceano do planeta?',
        'Qual é o rio mais longo do mundo?',
    ]
}

let answers = {
    purple:[
        ['Futebol','Volei','Basquete'],
        ['Usain Bolt', 'Eliud', 'Carl Lewis'],
        ['Inglaterra', 'Japão', 'Estados Unidos']
    ],
    pink:[
        ['Parasita','Frozen','Avengers'],
        ['Frozen', 'Titanic', 'Charlie Chaplin'],
        ['Robert Downey Jr', 'Mark Ruffalo', 'Chris Evans']
    ],
    red:[
        ['Leonardo da Vinci','Picasso','Van Gogh'],
        ['Realismo', 'Iluminismo', 'Romantismo'],
        ['Picasso', 'Salvador Dalí', 'Michelangelo']
    ],
    yellow:[
        ['Suméria','Romanos','Gregos'],
        ['Júlio César', 'Tibério', 'Marco Aurélio'],
        ['Queda da Bastilha', 'Stalingrado', 'Acidente Chernobyl']
    ],
    green:[
        ['Mercúrio','Marte','Vênus'],
        ['Pele', 'Pulmão', 'Instestino'],
        ['Ampere', 'Voltz', 'Fahrenheint']
    ],
    blue:[
        ['Rússia','Brazil','Canadá'],
        ['Pacífico', 'Índico', 'Atlêntico'],
        ['Amazonas', 'Nilo', 'Mississippi']
    ]
}