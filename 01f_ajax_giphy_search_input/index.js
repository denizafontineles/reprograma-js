// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const formulario = document.querySelector('#formulario')
const input = document.querySelector('#gifInput')
const div = document.querySelector('#root')

formulario.addEventListener('submit', pegaValor)

function pegaValor(evento) {
    evento.preventDefault()
    div.innerHTML = ''
    let valorUsuario = input.value
    input.value = ''


    const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${valorUsuario}&api_key=dc6zaTOxFJmzC&limit=10&offset=0`

    const request = new XMLHttpRequest()
    request.onreadystatechange = pegaImg;
    request.open('GET', urlRequest);
    request.send();


    function pegaImg() {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            const json = JSON.parse(response);
            const data = json.data;

            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                div.innerHTML += `
            <img src=${element.images.original.url}>
            `
            }
        }
    }
}


// console.error
// console.warn


