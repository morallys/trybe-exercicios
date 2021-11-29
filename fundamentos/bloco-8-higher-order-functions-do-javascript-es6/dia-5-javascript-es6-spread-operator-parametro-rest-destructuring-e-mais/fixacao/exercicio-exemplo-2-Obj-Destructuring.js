const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]);

const [hello, helloFunction] = saudacoes;

// helloFunction(hello);

// -----------------------------------------

// NOTE - 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

// ------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// const [num1, num2, num3, ...evenNumbers] = numerosPares;

[,,,...numerosPares] = numerosPares;

// numerosPares = evenNumbers;

console.log(numerosPares); // [6, 8, 10, 12];