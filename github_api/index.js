// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

const url = 'http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=30&offset=0'
const div = document.querySelector('#coot')

// 'https://api.github.com/users/denizafontineles'


async function buscaApi(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json()
            criarImagem(json.data)
        } else {
            const err = `${response.status}: ${response.statusText}`
            criaErro(err)
        }
    } catch (error) {
        criaErro('Erro na aquisição')
    }
}
criaErro = (erro) => {
    document.body.innerHTML = `<h1>${erro}</h1>`
}


function criarImagem(array) {

    if (array) {
        div.innerHTML = `
        <img scr=${array[1].images.original.url}/>
        `
        console.log(array[1].images.original.url)
    } else {
        console.error('não foi possivel')
    }

}

buscaApi(url).catch(err => console.error(err))









// ============= TRATANDO ERRO ==============

// async function buscaApi(url) {
//     const response = await fetch(url)
//     if (response.ok) {
//         const json = await response.json()
//         criarImagem(json.data)
//     } else {
//         document.body.innerHTML = `<h1>${response.status}: ${response.statusText}</h1>`
//     }
// }

// function criarImagem(array) {

//     if (array) {
//         document.body.innerHTML = `
//         <img scr=${array[1].images.original.url}>
//         `
//         console.log(array[1].images.original.url)
//     } else {
//         console.error('não foi possivel')
//     }

// }

// buscaApi(url).catch(err => console.error(err))




// ======================= NOVA FORMA WAIT =======================

// async function buscaApi(url) {
//     const response = await fetch(url)
//     const json = await response.json()
//     criarImagem(json.data)
// }

// function criarImagem(array) {

//     if (array) {
//         document.body.innerHTML = `
//         <img scr=${array[1].images.original.url}>
//         `
//         console.log(array[1].images.original.url)
//     } else {
//         console.error('não foi possivel')
//     }

// }

// buscaApi(url).catch(err => console.error(err))





// =========== EXEMPLO FETCH ===========

// const url = 'http://api.giphy.com/v1/gifs/search?q=batman&api_key=dc6zaTOxFJmzC&limit=5&offset=0'

// // 'https://api.github.com/users/denizafontineles'

// fetch(url)
//     .then(response => response.json())
//     .then(json => criarImagem(json.data))
//     .catch(erro => console.error(erro))

// function criarImagem(array) {
//     console.log(array)
//     document.body.innerHTML = `
//     <img scr=${array[0].images.original.url}>
//     `
//     console.log(array[0].images.original.url)
// }