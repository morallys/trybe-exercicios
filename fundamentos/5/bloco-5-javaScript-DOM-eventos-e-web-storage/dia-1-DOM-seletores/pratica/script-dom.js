/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

let pText = document.getElementsByTagName('p');

pText[0].innerText = 'Me imagino trabalhando com programação em uma grande empresa.';

let colorBackgroundMainContent = document.getElementsByClassName('main-content');

colorBackgroundMainContent[0].style.backgroundColor = 'rgb(76,164,109)';

let colorBackgroundCenterContent = document.getElementsByClassName('center-content');

pText[0].innerText = "Me imagino trabalhando com programação em uma grande empresa.";

const colorBackgroundMainContent = document.getElementsByClassName('main-content');

colorBackgroundMainContent[0].style.backgroundColor = 'rgb(76,164,109)';

const colorBackgroundCenterContent = document.getElementsByClassName('center-content');

colorBackgroundCenterContent[0].style.backgroundColor = 'white';

document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';

const document.getElementsByTagName('p')[0].innerText.toUpperCase();
// document.querySelector('.center-content p').innerText.toUpperCase();

for (const iterator of pText) {
  console.log(iterator);
}
