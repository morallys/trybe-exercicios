/*Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar

7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (menor > numbers[index]) {        
        menor = numbers[index];

    }     
}

console.log("O menor número do array é:", menor);

