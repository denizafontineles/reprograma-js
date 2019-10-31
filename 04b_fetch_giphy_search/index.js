// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput');
const bt = document.querySelector('#gifButton');
const div = document.querySelector('#root')

bt.addEventListener('click', (evento) => clicarBt(evento));

function clicarBt(ev) {
    ev.preventDefault();
    const valorInput = input.value
    console.log(valorInput)
    const link = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=2&offset=0`

    fetch(link)

        .then(response => response.json())
        .then(dados => mostraData(dados))
        .catch(erro => mostraErro(erro))
}

mostraErro = (erro) => {
    div.innerHTML = `<h1> ${erro} </h1>`
}


function mostraData(dados) {
    if (dados.message) {
        mostraErro(dados.message)

    } else {
        const arr = dados
        arr.forEach(element => {
            const scrImg = element.images.original.url
            div.innerHTML += `
            <img scr=${scrImg}>
            `
        })
    }

}

// =====================================================================================================================

// const input = document.querySelector('#gifInput');
// const bt = document.querySelector('#gifButton');
// const pegaDiv = document.querySelector('#root')

// bt.addEventListener('click', (evento) => clicarBt(evento));

// function clicarBt(ev) {
//     ev.preventDefault();
//     const valorInput = input.value
//     console.log(valorInput)
//     const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=2&offset=0`

//     fetch(url)
//         .then(resposta => {
//             if ( resposta.ok){
//                 console.log(resposta.statusText)
//                 mostraErro(resposta.statusText)
//             }
//             return resposta.json()
//         })
        
//         .then(json => mostraData (json))
//         .catch(e => mostraErro(e))
// }

// mostraErro = (erro) => {
//     pegaDiv.innerHTML = `<h1> ${erro} </h1>`
// }


// //         .then(response => response.json())
// //         .then(dados => mostraData(dados))
// //         .catch(erro => mostraErro(erro))
// // 


// function mostraData(json) {
//     if (json.message) {
//         mostraErro(json.message)

//     } else {
//         const arr = json.data
        
//         arr.forEach(element => {
//             const scrImg = (element.images.original.url)
//             pegaDiv.innerHTML = `
//             <img scr=${scrImg}>
//             `
//         })
//     }

// }

