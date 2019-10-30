// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const formulario = document.querySelector('#formulario')
const input = document.querySelector('#gifInput')
const div = document.querySelector('#root')


formulario.addEventListener('submit', pegaValor)

function pegaValor(evento) {
    evento.preventDefault()
    let valorUsuario = input.value.trim()


    const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${valorUsuario}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`

    const request = new XMLHttpRequest()
    request.onreadystatechange = pegaImg;
    request.open('GET', urlRequest);
    request.send();




    function pegaImg() {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            const json = JSON.parse(response);

            console.log(json)

            div.innerHTML = `
        <img src=${json.data[0].images.original.url}>
        <img src=${json.data[1].images.original.url}>
        <img src=${json.data[2].images.original.url}>
     `
        }
    }
}

// valorInput.addEventListener('submit', pegaValor)

// function pegaValor(e) {
//     valorInput.value

//     e.preventDefault();
//     console.log(pegaValor)
// }