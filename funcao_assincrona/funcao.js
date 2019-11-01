// ensaboar = () => {
//     return new Promise((resolve, reject) => {
//         console.log('comecou a ensaboar')
//         setTimeout(() => {
//             resolve(console.log('termina de ensaboar'))
//             enxaguar()
//         }, 5000);
//     })
// }

// enxaguar = () => {
//     console.log('enxaguando');
//     setTimeout(() => {
//         console.log('terminou');
//     }, 3000);

// }

// function lavaLouca(callback1, callback2) {
//     callback1().then(() => {
//         callback2()

//     })
// }

// fetch é uma promise
// funções sincronas: Funções que acontece quando chama
// funções assincronas: Funções que demoram um tempo para acontecer
// callback uma função que chama outra
// promisse é uma função que demora um tempo

function criaTex(texto) {
    const div = document.querySelector('#root')
    div.innerHTML += `<h1>${texto}</>`
}

const sabao = false

function ensaboar() {
    return new Promise((resolve, reject) => {
        if (sabao) {
            criaTex('começoou ens!')
            setTimeout(() => {
                resolve('terminooou ens!')
            }, 5000);
        } else {
            reject('não foooi')
        }
    })
}

function enxaguar() {
    return new Promise((resolve, reject) {
        criaTex('começa enx1!')
        setTimeout(() => {
            resolve('terminou enx!!')
        }, 3000);
    })
}

ensaboar()
    .then(res => {
        criaTex(res)
        enxaguar()
            .then(res2 => criaTex(res2))
    })
    .catch(err => criaTex(err))