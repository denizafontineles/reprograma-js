// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector('#root');
const img = document.createElement('img');

const request = new XMLHttpRequest();

request.onreadystatechange = getDados

function getDados() {
    // const response = request.response;
    // console.log(typeof response);


    // const json = JSON.parse(response);
    // console.log(json);
    

    // const data = json.data;
    // const obj = data[0];
    // const imgSrc = json.data[0].imagem;
    // console.log(imgSrc);

    // img.src = imgSrc
    // div.appendChild(img)

    if(request.readyState === 4 && request.status === 200){
        const response = request.response;
        console.log(request.readyState, request.status)
        const json = JSON.parse(response);
        const data = json.data;
        const obj = data [0];

        const imgSrc = obj.imagem
        img.src = imgSrc
        div.appendChild(img);
    }else{
        console.log(request.readyState, request.status)
    }
}

const url = './data/dados.json'
request.open('GET', url);
request.send();