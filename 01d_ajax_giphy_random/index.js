// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

// chamando request

const muda = 'batman'
const request = new XMLHttpRequest();
const url = `http://api.giphy.com/v1/gifs/search?q=${muda}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`

request.onreadystatechange = mostraGif
// faz a conecção e usa o GET para pegar algo
request.open('GET', url);
// enviar a requisição dessa conecção 
request.send()

function mostraGif(){
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);

        let acessar = (json.data[0].images.original.url);
        let acessar2 = (json.data[1].images.original.url);
        let acessar3 = (json.data[2].images.original.url);

        
        const body = document.body;
        
        const imagem = document.getElementById('imagem').src = acessar;
        const img2 = document.createElement('img');
        const img3 = document.createElement('img');

        body.appendChild(img2).src = acessar2;
        body.appendChild(img3).src = acessar3;

        console.log(json);

        
    }

}


// if (request.readyState === 4 && request.status === 200) {
//     const response = request.response;
//     const json = JSON.parse(response);
//     const body = document.body;
//     body.innerHTML = `
//     <img src = ${json.data[0].images.original.url}>
//     <img src = ${json.data[0].images.original.url}>
//     <img src = ${json.data[0].images.original.url}>
// `
// }
// XMLHttpRequest na rota random

const urlRequest = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`

const request = new XMLHttpRequest()
request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();

function mostraGif() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);

    const imgUrl = json.data.images.original.url;

    const img = document.getElementById('imagem');
    img.src = imgUrl;
  }
}
