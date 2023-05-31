let deg = 0;
const wheel = document.querySelector(".wheel");
const markerBtn = document.querySelector(".marker");
let points = 0;
let worngQuestion = 0;
let imgLogo = document.querySelector('#logoPerguntados');
let rightWrong = document.getElementById("rightWrong");
let score = document.getElementById('score');

let listQuestions;
let listAnswer;

let question = document.querySelector("#question");
let btnAns = document.querySelectorAll(".buttonAns");
let divQuestion = document.getElementById("containerQuestions");

// Para fazer a roda girar
markerBtn.addEventListener("click", () => {
  markerBtn.style.pointerEvents = "none";
  deg = Math.floor(5000 + Math.random() * 3600);
  // Aqui vc deve comparar se a lista de perguntas/respostas está vazia, caso estiver, passar para o proximo tema que não esteja vazio, 
  // até terminar as 18 perguntas e, por fim, mostrar a porcentagem de acertos que a pessoa teve
  verifyIsEmpty(deg) // tentar colocar a verificação na função verificarResultado
  wheel.style.transition = "all 10s ease-in-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  // Para colocar um timer na função antes de executar:
  setTimeout(() => verificarResultado(deg % 360), 10000);
  rightWrong.style.visibility = 'hidden'
});

// Evento após a rotação
wheel.addEventListener("transitionend", () => {
  wheel.style.transition = "none";
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;
  btnAns.forEach((btn=>{
    btn.disabled = false
    btn.style.backgroundColor = "#F0F0F0";
  }))
  divQuestion.style.visibility = 'visible'
  imgLogo.style.visibility = 'hidden'
});

function verificarResultado(deg) {
  if (deg >= 0 && deg <= 60) {
    showQuestion("purple");
  } else if (deg >= 61 && deg <= 120) {
    showQuestion("pink");
  } else if (deg >= 121 && deg <= 180) {
    showQuestion("red");
  } else if (deg >= 181 && deg <= 240) {
    showQuestion("yellow");
  } else if (deg >= 241 && deg <= 300) {
    showQuestion("green");
  } else if (deg >= 301 && deg <= 360) {
    showQuestion("blue");
  } else {
    rightWrong.innerHTML = "Gire Novamente";
    btnAns.forEach((btn=>{
      btn.disabled = false
      btn.style.backgroundColor = "#F0F0F0";
    }))
  }
}

// Função para enviar as perguntas do tema roxo
// mostrarPerguntaRoxa(){

// Gerar um numero aleatorio entre 0 e o tamnho da minha lista
// Para colocar na função do calculo
// perguntas.roxa.length

// }

function verifyIsEmpty(deg){
  deg = deg % 360
  console.log(deg)
  console.log(listQuestions)
  console.log(listAnswer)
  while(true){
    if(listQuestions===0 && listAnswer===0){
      deg+=60
      console.log(deg)
    }
    break
  }
}

function showQuestion(color) {
  listQuestions = questions[color]
  let tamList = listQuestions.length;
  let randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = listQuestions[randomQuestion];
  
  listAnswer = answers[color]
  let listAns = listAnswer[randomQuestion];

  if(listQuestions!=undefined || listAns!=undefined){
    showAns(listAns)
    noRepeatQuestion(listAnswer,listQuestions,randomQuestion)
  }
}

function showAns(lista) {
  var flag = true
  var list = lista
  var lenAns = list.length;
  btnAns.forEach((btn) => {
    var randomAns = Math.floor(Math.random() * lenAns);
    var itemList = list[randomAns];
    btn.innerHTML = itemList;

    if(randomAns == 0 && flag) {
      btn.classList.add("rightAnswer")
      flag = false
    }

    list = list.filter(function (item) {
      return item !== itemList;
    });
    btn.classList.add(randomAns)
    lenAns--;
  });
}

btnAns.forEach((btn) => {
  btn.addEventListener("click", compareAnswer)
})

function compareAnswer(evt){
  let alvoClicado = evt.target;
  const rightAnswer = alvoClicado.classList.contains("rightAnswer")
  let parentElement = alvoClicado.parentNode;
  let siblings = Array.from(parentElement.children);
  let targetSiblings = siblings.filter(sibling => sibling !== alvoClicado);
  
  if(rightAnswer) {
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }
  else {
    worngQuestion++;
    alvoClicado.style.backgroundColor = 'red';
    rightWrong.innerHTML = "Errado!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }
  score.innerHTML = "Score: " + points;
  score.style.visibility = 'visible';
  markerBtn.style.pointerEvents = "auto";

  parentElement.querySelector(".rightAnswer").classList.remove("rightAnswer")
}

// Função para saber a porcentagem de acertos do usuário
function compareResults(right,wrong){
  total = (right+wrong);
  return (right/total)*100;
}

function noRepeatQuestion(listAnswer,listQuestions,randomNum){
  listQuestions.splice(randomNum, 1)
  listAnswer.splice(randomNum,1)
}

// Objeto com Lista para as perguntas
let questions = {
  purple: [
    "Quem pintou a famosa obra 'Mona Lisa'?",
    "Qual é o movimento artístico conhecido por retratar a realidade de forma precisa e detalhada?",
    "Qual é o nome do famoso pintor espanhol conhecido por suas obras cubistas, como 'Guernica'?",
  ],
  pink: [
    "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
    "Qual é o filme de animação mais lucrativo de todos os tempos?",
    "Quem interpretou o personagem Tony Stark, também conhecido como Homem de Ferro, nos filmes do Universo Cinematográfico Marvel (MCU)?",
  ],
  red: [
    "Qual é o esporte mais popular do mundo?",
    "Quem é o recordista mundial dos 100 metros rasos masculino?",
    "Em que país nasceu o tênis de mesa?",
  ],
  yellow: [
    "Qual foi a primeira civilização da Mesopotâmia?",
    "Quem foi o imperador romano conhecido por ter sido assassinado no Senado romano em 44 a.C.?",
    "Qual foi o evento que marcou o início da Revolução Francesa em 1789?",
  ],
  green: [
    "Qual é o planeta mais próximo do Sol?",
    "Qual é o maior órgão do corpo humano?",
    "Qual é a unidade de medida de corrente elétrica?",
  ],
  blue: [
    "Qual é o país com a maior área territorial do mundo?",
    "Qual é o maior oceano do planeta?",
    "Qual é o rio mais longo do mundo?",
  ],
};

// Objeto com Listas de listas para as respostas
let answers = {
  purple: [
    ["Leonardo da Vinci", "Picasso", "Van Gogh"],
    ["Realismo", "Iluminismo", "Romantismo"],
    ["Picasso", "Salvador Dalí", "Michelangelo"],
  ],
  pink: [
    ["Parasita", "1917", "Coringa"],
    ["Frozen 2", "Super Mario Bros", "Shrek"],
    ["Robert Downey Jr", "Mark Ruffalo", "Chris Evans"],
  ],
  red: [
    ["Futebol", "Volei", "Basquete"],
    ["Usain Bolt", "Eliud", "Carl Lewis"],
    ["Inglaterra", "Japão", "Estados Unidos"],
  ],
  yellow: [
    ["Suméria", "Romanos", "Gregos"],
    ["Júlio César", "Tibério", "Marco Aurélio"],
    ["Queda da Bastilha", "Stalingrado", "Acidente Chernobyl"],
  ],
  green: [
    ["Mercúrio", "Marte", "Vênus"],
    ["Pele", "Pulmão", "Instestino"],
    ["Ampere", "Voltz", "Fahrenheint"],
  ],
  blue: [
    ["Rússia", "Brazil", "Canadá"],
    ["Pacífico", "Índico", "Atlântico"],
    ["Amazonas", "Nilo", "Mississippi"],
  ],
};