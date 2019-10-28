// 1.
// [X] adicionar a tag <script> no html
// [X] verificar se está lendo index.js
// [X] alterar cor de <body>
// [X] escutar o clique do botão
// [X] criar função de alterar a cor usando rgb()
// [X] usar Math.random() e Math.floor() ou parseInt()

// console.log('Olá');

const body = document.body;
const escutaClick = document.getElementById('troca-cor');
// const n = Math.random()
// const n2 = n * 255
// const int = parseInt(n2)

// console.log('Numero:', n)
// console.log('Numero2:', n2)
// console.log('Int:', int)


escutaClick.addEventListener('click', mudaCor);

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    return n;
}


function mudaCor() {
    // const rAleatorio = parseInt(Math.random() * 255)
    // const bAleatorio = parseInt(Math.random() * 255)
    // const gAleatorio = parseInt(Math.random() * 255)

    const rAleatorio = geraInteiro();
    const bAleatorio = geraInteiro();
    const gAleatorio = geraInteiro();

    body.style.backgroundColor = 'rgb(' + rAleatorio + ',' + gAleatorio + ',' + bAleatorio + ')';
    console.log('rgb(' + rAleatorio + ',' + bAleatorio + ',' + rAleatorio + ')')
}