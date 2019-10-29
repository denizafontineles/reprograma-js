// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()


// function geraInteiro() {
//     const n = parseInt(Math.random() * 255);
//     return n;
// }


// function mudaCor() {
// const rAleatorio = parseInt(Math.random() * 255)
// const bAleatorio = parseInt(Math.random() * 255)
// const gAleatorio = parseInt(Math.random() * 255)


// ------------------------------------------------------------------------
// 2. melhorando o código
<<<<<<< HEAD
// [X] remover repetição de código
// [X] anonymous function (Quando ela não precisa ser nomeada)

// [X] arrow function ( é => no lugar da função)

// [] template strings



// const body = document.body;
// const escutaClick = document.getElementById('troca-cor');
// body.style.backgroundColor = 'purple'

// escutaClick.addEventListener('click', () => {
//     const rAleatorio = geraInteiro(255);
//     const bAleatorio = geraInteiro(255);
//     const gAleatorio = geraInteiro(255);

//     body.style.backgroundColor = 'rgb(' + rAleatorio + ',' + gAleatorio + ',' + bAleatorio + ')';
//     console.log('rgb(' + rAleatorio + ',' + bAleatorio + ',' + rAleatorio + ')')

// });
// geraInteiro = n => parseInt(Math.random() * n);



const body = document.body;
const escutaClick = document.getElementById('troca-cor');
body.style.backgroundColor = 'purple'

// escutaClick.addEventListener('click', () => {

class mudaCor{
    constructor(){
    this.rAleatorio = geraInteiro(255);
    this.bAleatorio = geraInteiro(255);
    this.gAleatorio = geraInteiro(255);

    body.style.backgroundColor = 'rgb(' + rAleatorio + ',' + gAleatorio + ',' + bAleatorio + ')';
    console.log('rgb(' + rAleatorio + ',' + bAleatorio + ',' + rAleatorio + ')')

});
geraInteiro = n => parseInt(Math.random() * n);
=======
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', () => {
  const r = geraInteiro(255);
  const g = geraInteiro(255);
  const b = geraInteiro(255);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

geraInteiro = num => parseInt(Math.random() * num);
>>>>>>> 6cbe0f82e22012a3db1c90d3e3a40f969af0987f
