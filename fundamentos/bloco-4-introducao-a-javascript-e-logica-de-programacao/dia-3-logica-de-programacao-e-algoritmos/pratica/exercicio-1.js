/**
 * 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
                            n = 5

                            *****
                            *****
                            *****
                            *****
                            ***** 
 */

const n = 5;
let line = '';
let character = '*';

if (n > 1) {
    for (let x = 0; x < n; x += 1) {
        for (let y = 0; y < n; y += 1) {
            line = line + character;  
        }       
        console.log(line); 
        line = '';
    }
}else {
    console.log("Valor inválido");
}
