
// Requisito 1
let element_h1 = document.createElement('h1');
element_h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(element_h1);

// Requisito 2
let element_main = document.createElement('main');
element_main.className = 'main-content';
document.body.appendChild(element_main);

// Requisito 3
let element_section = document.createElement('section');
let element_pai_section = document.querySelector('.main-content')
element_section.className = 'center-content';
element_pai_section.appendChild(element_section);