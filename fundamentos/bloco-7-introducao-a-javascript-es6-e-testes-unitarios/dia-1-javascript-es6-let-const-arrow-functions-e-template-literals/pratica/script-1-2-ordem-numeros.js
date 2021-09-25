// REVIEW - Código para ordenar os números de um array.

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let array = [];
// for (let i = 0 ; i < 100 ; i++){
// array.push(getRandom(0,100));
// }

// // console.log(array);

// const oddsAndEvens = array;


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// for (let indexL = 0; indexL < oddsAndEvens.length; indexL += 1) {
//   for (let indexC = 0; indexC < oddsAndEvens.length; indexC += 1) {
//     const number1 = oddsAndEvens[indexL];
//     const number2 = oddsAndEvens[indexC];
//     let smallNumber;
//     if (number1 < number2) {
//       smallNumber = number2;
//       oddsAndEvens[indexL] = smallNumber;
//       oddsAndEvens[indexC] = number1;
//     }
//   }
// }

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);
// // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort((a, b) => a-b);

// LINK: https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/11
// LINK https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);
// será necessário alterar essa linha 😉