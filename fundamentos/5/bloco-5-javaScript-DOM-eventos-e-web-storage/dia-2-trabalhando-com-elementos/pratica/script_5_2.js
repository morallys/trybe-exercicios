
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
element_section.className = 'center-content';
element_main.appendChild(element_section);

// Requisito 4
let element_p = document.createElement('p');
let element_pai_section_p = document.querySelector('.center-content');
element_p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit saepe sint culpa velit ratione voluptate fuga beatae tempore. Quod quaerat nostrum, exercitationem numquam explicabo dolores laboriosam. Molestiae, et architecto?';
element_pai_section_p.appendChild(element_p);

// Requisito 5
let element_left_content = document.createElement('section');
element_left_content.className = 'left-content';
element_main.appendChild(element_left_content);

// Requisito 6
let element_right_content = document.createElement('section');
element_right_content.className = 'right-content';
element_main.appendChild(element_right_content);

// Requisito 7
let element_img_small_image = document.createElement('img');
element_img_small_image.className = 'small-image';
element_img_small_image.setAttribute('src', 'https://picsum.photos/200');
let left_content_pai = document.querySelector('.left-content');
left_content_pai.appendChild(element_img_small_image);

// Requisito 8

let element_list_unOrder = document.createElement('ul');
element_right_content.appendChild(element_list_unOrder);

const numbers = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
]

let list_ul_local = document.querySelector('.right-content ul');

for (let index = 0; index < numbers.length; index += 1) {
  let numberFull = numbers[index];

  let element_li = document.createElement('li');
  element_li.innerText = numberFull;

  element_list_unOrder.appendChild(element_li);
}

// Requisito 9

function createInsertH3 () {
  let element_h3 = document.createElement('h3');
  element_main.appendChild(element_h3);
}

for (let index = 0; index < 3; index += 1) {
  createInsertH3();
}

// =========================BÔNUS=========================

// Requisito 1 - bônus

element_h1.className = 'title';

// Requisito 2 - bônus

let changeClasseNameH3 = document.getElementsByTagName('h3');

for (let key in changeClasseNameH3) {
  changeClasseNameH3[key].className = 'description';  
}

// Requisito 3 - bônus

let deleteChild = document.querySelector('.left-content');
element_main.removeChild(deleteChild);

// Requisito 4 - bônus

element_right_content.style.marginRight = 'auto';

// Requisito 5 - bônus

element_main.style.backgroundColor = 'green';

