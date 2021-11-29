/*Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar

4 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if(maior < numbers[index]){
        maior = numbers[index];

    }    
}

console.log("O maior número do array é:", maior);

