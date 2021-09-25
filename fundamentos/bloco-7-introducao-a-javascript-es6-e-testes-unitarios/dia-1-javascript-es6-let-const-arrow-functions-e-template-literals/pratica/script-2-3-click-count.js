const clickCount = document.querySelector('#btn-click');
const pElement = document.querySelector('#qtd-click');
let counter = 0;


clickCount.addEventListener('click', () => {
  counter += 1;
  pElement.innerText = counter;
});