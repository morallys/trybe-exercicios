/*Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar

3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

    A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
 */


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numMedia = numbers.length;
let sum = 0;
let total = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];    
}

total = sum / numMedia;

console.log("A média de todos os números do array =", total);