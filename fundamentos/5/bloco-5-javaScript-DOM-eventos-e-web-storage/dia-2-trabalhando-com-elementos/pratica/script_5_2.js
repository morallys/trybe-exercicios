
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

// Requisito 4
let element_p = document.createElement('p');
let element_pai_section_p = document.querySelector('.center-content');
element_p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit saepe sint culpa velit ratione voluptate fuga beatae tempore. Quod quaerat nostrum, exercitationem numquam explicabo dolores laboriosam. Molestiae, et architecto?';
element_pai_section_p.appendChild(element_p);

// Requisito 5
let element_left_content = document.createElement('section');
element_left_content.className = 'left-content';
element_pai_section.appendChild(element_left_content);

// Requisito 5
let element_right_content = document.createElement('section');
element_right_content.className = 'right-content';
element_pai_section.appendChild(element_right_content);


