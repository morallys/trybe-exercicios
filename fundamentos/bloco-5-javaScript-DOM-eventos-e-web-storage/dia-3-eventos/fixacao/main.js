const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// Requisito 3
window.onload = function (){

  let userInput = document.getElementById('input');  

  userInput.addEventListener('keyup', function () {  
    
    let inputText = userInput.value;      
    let textClassTech = document.querySelector('.tech');

    textClassTech.innerText = inputText;    
  
  })  

  // Requisito 4
  let eventosClickColor_H3 = document.getElementById('my-spotrybefy');

  eventosClickColor_H3.addEventListener('dblclick', function () {    
    window.open(
      'https://morallys.github.io/',
      '_blank'
    )

      /**
       * Encontrei várias formas de se fazer esse exercício mas não pra abrir em outra aba
       * window.location.href = 'https://site';
       * location.assing('https://site');
       */

  })

  // Requisito 5

  eventosClickColor_H3.addEventListener('mouseover', function () {
    eventosClickColor_H3.style.color = 'purple';    
  })

  eventosClickColor_H3.addEventListener('mouseleave', function () {
    eventosClickColor_H3.style.color = 'white';    
  })
  
}
