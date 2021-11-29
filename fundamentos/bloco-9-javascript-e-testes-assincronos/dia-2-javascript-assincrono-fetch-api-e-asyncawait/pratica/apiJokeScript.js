// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const createElement = (data) => {
  const father = document.getElementById('jokeContainer');
  father.innerText = data.joke;
};

const getJoke = (dataObj) => {
  return createElement(dataObj);
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => getJoke(data));
    // .then((data) => console.log(data));
};

window.onload = () => fetchJoke();