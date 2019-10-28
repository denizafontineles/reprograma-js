// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
const escutaClick = document.getElementById('troca-cor');

escutaClick.addEventListener('click', () => {
    const rAleatorio = geraInteiro();
    const bAleatorio = geraInteiro();
    const gAleatorio = geraInteiro();

    body.style.backgroundColor = 'rgb(' + rAleatorio + ',' + gAleatorio + ',' + bAleatorio + ')';
    console.log('rgb(' + rAleatorio + ',' + bAleatorio + ',' + rAleatorio + ')')

});

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
// [X] remover repetição de código
// [X] anonymous function (Quando ela não precisa ser nomeada)

// [X] arrow function ( é => no lugar da função)
geraInteiro = n => parseInt(Math.random() * n);

// [] template strings