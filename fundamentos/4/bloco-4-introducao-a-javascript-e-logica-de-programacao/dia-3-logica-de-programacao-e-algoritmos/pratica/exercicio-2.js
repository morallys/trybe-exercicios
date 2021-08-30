/**
    2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

            n = 5

            *
            **
            ***
            ****
            *****
 */

/**
 * 1 - dado um n qualquer maior que 1
 * 2 - criar um laço de repetição para repetir n vezes a linha
 * 3 - criar um laço para repetir na coluna
 * 4 - imprimir na tela n vezes em n linhas o valor n em *
 */

const n = 5;
let line = '';
let character = '*'; 

if (n > 1) {
    for (let index = n; index > 0; index -= 1) {
        line = line + character;
        console.log(line);   
    }
}else {
    console.log("Valor inválido");
}    

