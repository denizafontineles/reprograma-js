// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

<<<<<<< HEAD
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


=======
const input = document.querySelector('#gifInput');
// console.log(input);
const botao = document.querySelector('#gifButton');
// console.log(botao);
const div = document.querySelector('#root');
// console.log(div);

botao.addEventListener('click', function (evento) {
  fazerAlgoDepoisDeClicar(evento)
});

function fazerAlgoDepoisDeClicar(evento) {
  evento.preventDefault();
  div.innerHTML = '';
  // console.log('será que eu cliquei??');
  const valorDoInput = input.value;
  input.value = '';
  // console.log(valorDoInput)
  const minhaChave = 'dc6zaTOxFJmzC';
  const oQueQueroBuscar = valorDoInput;
  const enderecoAPI = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`;
  // console.log(enderecoAPI);

  const requisicaoHttp = new XMLHttpRequest()
  requisicaoHttp.open('GET', enderecoAPI);
  requisicaoHttp.send();
  requisicaoHttp.onreadystatechange = function pegandoResposta() {
    if (requisicaoHttp.readyState === 4) {
      if (requisicaoHttp.status === 200) {
        console.log('a resposta está pronta');
      } else {
        const statusCode = requisicaoHttp.status;
        const statusMensagem = requisicaoHttp.statusText;
        // console.log('Este é meu console log', statusCode, statusMensagem);
        console.error('Este é meu console error', statusCode, statusMensagem);
        // console.warn('Este é meu console warn');

        div.innerHTML = `<h1>Falha ${statusCode}: ${statusMensagem}</h1>`
        // console.log('meu, deu ruim na requisição e não tem resposta', requisicaoHttp.status);
      }
      const resposta = requisicaoHttp.response;
      const respTransfObj = JSON.parse(resposta);
      // console.log(respTransfObj.data);
      const arrData = respTransfObj.data;
      // console.log(arrData[2].images.original.url);
      for (const iterator of arrData) {
        // console.log(iterator.images.original.url);
        div.innerHTML += `<img src=${iterator.images.original.url} >`
      }

      // div.innerHTML = `
      //   <img src=${arrData[0].images.original.url} >
      //   <img src=${arrData[1].images.original.url} >
      //   <img src=${arrData[2].images.original.url} >      
      // `
    } else {
      // console.log('ainda não está pronta');
    }
  }
  /* api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0 */
}
>>>>>>> master
