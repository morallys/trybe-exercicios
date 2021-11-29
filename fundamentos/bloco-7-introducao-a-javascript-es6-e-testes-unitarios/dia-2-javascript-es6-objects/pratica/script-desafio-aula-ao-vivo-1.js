// Desenvolva uma função que receba um array como parâmetro e
// retorne um array com os números pares

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let arr = [];
for (let i = 0 ; i < 50; i++){
  arr.push(getRandom(0,50));
}

function getEvenNumbers(array) {
  let arrAux = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      arrAux.push(array[index]);
    }
  }
  return arrAux;
}

console.log(`Números pares: ${getEvenNumbers(arr)}`); // [2,4]
console.log(`Números aleatórios: ${arr}`);

// console.log(exibePar(1,2,3,4,5));