// NOTE - Ao rodar esse código será impresso no console:  Promise { <pending> } ao invés da piada. Nesse caso, o fluxo assíncrono ainda não foi controlado, ela vai retornar o seu estado e não o dado requisitado.

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

// -------------------------------------------

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n ${error}`));
// }

// fetchJoke();

// ------------------async----------------------

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// --------------------await---------------------

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));

//   return result;
// }

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// ---------------usando o try/catch---------------

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

/**
 * 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
 *
 * R - É um código que não impede a execução natural do bloco de código, e executa em segundo plano até obter a sua response. Um código síncrono é executado passo a passo, bloqueando a execução do bloco de código até receber a response.
 *
 * 2 - Quando você tem que enfileirar várias callbacks , que problema surge?
 *
 * R - Surge o problema de bloquear algumas partes do código que não dependem umas das outras, e fazer com que todo o código abaixo não seja executado até a response daquela em execução ser recebida.
 *
 * 3 - Por que as Promises são uma forma de resolver esse problema?
 *
 * R - As promises são assíncronas, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções.
 *
 * 4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
 *
 * R - A comunicação deve ser assíncrona, tendo em vista que levará um tempo para a response e caso fosse síncrona pararia o fluxo de execução do código.
 *
 * 5 - Dada a resposta anterior, o que é fetch e para que ele serve?
 *
 * R - A fetch() é utilizada para fazer chamadas às URL's das APIs. É uma função assíncrona, baseada em uma promise.
*/