const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// Requisito 2
window.onload = function (){

  let userInput = document.getElementById('input');

  

  userInput.addEventListener('keyup', function () {  
    
    let inputText = userInput.value;      
    let textClassTech = document.querySelector('.tech');

    textClassTech.innerText = inputText;    
  
  })  
}



/*

const inputTexto = document.querySelector("#input-texto");
const divQuadrado = document.querySelector(".quadrado");

function corQuadrado() {
  divQuadrado.style.backgroundColor = inputTexto.value;
}

inputTexto.addEventListener("change", corQuadrado);*/