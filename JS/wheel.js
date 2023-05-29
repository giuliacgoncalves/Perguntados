let deg = 0;
const wheel = document.querySelector(".wheel");
const markerBtn = document.querySelector(".marker");
let points = 0;
let worngQuestion = 0;
let imgLogo = document.querySelector('#logoPerguntados');
let rightWrong = document.getElementById("rightWrong");
let score = document.getElementById('score');


let question = document.querySelector("#question");
let btnAns = document.querySelectorAll(".buttonAns");
let divQuestion = document.getElementById("containerQuestions");

markerBtn.addEventListener("click", () => {
  markerBtn.style.pointerEvents = "none";
  deg = Math.floor(5000 + Math.random() * 3600);
  wheel.style.transition = "all 10s ease-in-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  // Para colocar um timer na função antes de executar:
  setTimeout(() => verificarResultado(deg % 360), 10000);
  rightWrong.style.visibility = 'hidden'
});

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
  console.log(deg);
  if (deg >= 9 && deg <= 58) {
    showPurpleQuestion();
  } else if (deg >= 69 && deg <= 117) {
    showPinkQuestion();
  } else if (deg >= 128 && deg <= 177) {
    showRedQuestion();
  } else if (deg >= 188 && deg <= 237) {
    showYellowQuestion();
  } else if (deg >= 248 && deg <= 297) {
    showGreenQuestion();
  } else if (deg >= 309 && deg <= 357) {
    showBlueQuestion();
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


function showPurpleQuestion() {
  var tamList = questions.purple.length;
  var randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.purple[randomQuestion];
  questions.purple = questions.purple.splice(randomQuestion, 1)
  
  var listAns = answers.purple[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}
function showPinkQuestion(color) {
  tamList = questions.pink.length;
  randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.pink[randomQuestion];
  questions.pink = questions.pink.splice(randomQuestion, 1)
  // questions[color] -> função generica 
console.log(questions)
  var listAns = answers.pink[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}
function showRedQuestion() {
  tamList = questions.red.length;
  randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.red[randomQuestion];
  questions.red = questions.red.splice(randomQuestion, 1)
  console.log(questions)
  var listAns = answers.red[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}
function showYellowQuestion() {
  tamList = questions.yellow.length;
  randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.yellow[randomQuestion];
  questions.yellow = questions.yellow.splice(randomQuestion, 1)
  console.log(questions)
  var listAns = answers.yellow[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}
function showGreenQuestion() {
  tamList = questions.green.length;
  randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.green[randomQuestion];
  questions.green = questions.green.splice(randomQuestion, 1)
  console.log(questions)
  var listAns = answers.green[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}
function showBlueQuestion() {
  tamList = questions.blue.length;
  randomQuestion = Math.floor(Math.random() * tamList);
  question.innerHTML = questions.blue[randomQuestion];
  questions.blue = questions.blue.splice(randomQuestion, 1)
  console.log(questions)
  
  var listAns = answers.blue[randomQuestion];
  console.log(listAns);
  showAns(listAns);
}

function showAns(lista) {
  var list = lista
  var lenAns = list.length;
  btnAns.forEach((btn) => {
    var randomAns = Math.floor(Math.random() * lenAns);
    var itemList = list[randomAns];
    console.log(randomAns);
    btn.innerHTML = itemList;
    list = list.filter(function (item) {
      return item !== itemList;
    });
    btn.classList.add(randomAns)
    console.log(list);
    lenAns--;

    //  list.splice(randomAns, 1);
  });
}

btnAns.forEach((btn) => {
  btn.addEventListener("click", compareAnswer)
})

function compareAnswer(evt){
  let alvoClicado = evt.target;
  let valor = alvoClicado.innerHTML;

  let parentElement = alvoClicado.parentNode;
  let siblings = Array.from(parentElement.children);
  let targetSiblings = siblings.filter(sibling => sibling !== alvoClicado);
  console.log(targetSiblings)

  let ansPurple = answers.purple
  let ansPink = answers.pink
  let ansRed = answers.red
  let ansYellow = answers.yellow
  let ansGreen = answers.green
  let ansBlue = answers.blue

  if(valor == ansPurple[0][0]||valor == ansPurple[1][0]||valor == ansPurple[2][0]){
    console.log(ansPurple)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else if(valor == ansPink[0][0]||valor == ansPink[1][0]||valor == ansPink[2][0]){
    console.log(ansPink)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else if(valor == ansRed[0][0]||valor == ansRed[1][0]||valor == ansRed[2][0]){
    console.log(ansRed)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else if(valor == ansYellow[0][0]||valor == ansYellow[1][0]||valor == ansYellow[2][0]){
    console.log(ansYellow)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else if(valor == ansGreen[0][0]||valor == ansGreen[1][0]||valor == ansGreen[2][0]){
    console.log(ansGreen)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else if(valor == ansBlue[0][0]||valor == ansBlue[1][0]||valor == ansBlue[2][0]){
    console.log(ansBlue)
    alvoClicado.style.backgroundColor = 'lightgreen';
    points++;
    rightWrong.innerHTML = "Correto!";
    rightWrong.style.visibility = 'visible'
    targetSiblings.forEach((sibling=>{
      sibling.disabled = true
    }))
  }else{
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
}

function compareResults(right,wrong){
  total = (right+wrong);
  return (right/total)*100;
}

function noRepeatQuestion(){

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

let answers = {
  purple: [
    ["Leonardo da Vinci", "Picasso", "Van Gogh"],
    ["Realismo", "Iluminismo", "Romantismo"],
    ["Picasso", "Salvador Dalí", "Michelangelo"],
  ],
  pink: [
    ["Parasita", "1917", "Coringa"],
    ["Frozen", "Super Mario Bros", "Shrek"],
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
    ["Pacífico", "Índico", "Atlêntico"],
    ["Amazonas", "Nilo", "Mississippi"],
  ],
};