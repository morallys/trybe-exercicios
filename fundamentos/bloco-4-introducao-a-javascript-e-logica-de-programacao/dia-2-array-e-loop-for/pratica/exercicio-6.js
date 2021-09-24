/*Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar

6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 52, 24];

let countImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        countImpar += 1;
    }    
}

if (countImpar === 0) {
    console.log("nenhum valor ímpar encontrado");

}else{
    console.log(countImpar, "números ímpares encontrados");
}