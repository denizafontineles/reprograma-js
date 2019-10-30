// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const div = document.querySelector('#root');
const url = './data/dados.json';

<<<<<<< HEAD
const div = document.getElementById('root');
const request = new XMLHttpRequest();

const url = './data/dados.json';

request.onreadystatechange = mostraIMG
request.open('GET', url);
request.send()

function mostraIMG() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const img = `<img src=${element.imagem}>`;
            div.innerHTML += img

        }

        console.log(json);
    }
}

// div.innerHTML = `
// <img src = ${json.data[0].imagem}>
// <img src = ${json.data[1].imagem}>
// <img src = ${json.data[2].imagem}>
// `




// function mostraIMG() {
//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const data = json.data;

//         const div = document.getElementById('root');
//         // const body = document.body

//         div.innerHTML = `
//         <img src = ${json.data[0].imagem}>
//         <img src = ${json.data[1].imagem}>
//         <img src = ${json.data[2].imagem}>
//         `

//         console.log(json);
//     }
// }










// const imagem1 = document.createElement('img');
// const imagem2 = document.createElement('img');
// const imagem3 = document.createElement('img');

// div.appendChild(imagem1);
// div.appendChild(imagem2)
// div.appendChild(imagem3)


// const guarda = obj.imagem
// const guarda2 = obj2.imagem
// const guarda3 = obj3.imagem

// imagem1.src = guarda;
// imagem2.src = guarda2;
// imagem3.src = guarda3;




// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEachx
=======
const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

req.onreadystatechange = pegarDados;

function pegarDados() {
  if (req.readyState === 4) {
    if (req.status === 200) {
      const response = req.response;
      const json = JSON.parse(response);
      const data = json.data;
      // criarImagens(data);
      // criarImagensFor(data);
      // criarImagensForEach(data);
      criarImagensForOf(data);
    }
  }
}


function criarImagens(array) {
  div.innerHTML += `
  <img src=${array[0].imagem} >
  <img src=${array[1].imagem} >
  <img src=${array[2].imagem} >
  `
}

function criarImagensFor(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img
  }
}

function criarImagensForEach(array) {
  array.forEach(element => {
    console.log(element);
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img;
  });
}

function criarImagensForOf(array) {
  for (const posicao of array) {
    // const img = `<img src=${posicao.imagem}>`;
    // div.innerHTML = img;
    const img = document.createElement('img');
    img.src = posicao.imagem;
    div.appendChild(img);
  }
}
>>>>>>> f867572238c8dcffe2dd99a7c17641c882d5fba1
