// console.log('Hello, world!');

const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');

console.log(`..:: Cadastro realizado com sucesso. Nome: ${name}. Idade: ${age} ::..`);