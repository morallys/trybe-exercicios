/**
 * 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
                            n = 5

                            *****
                            *****
                            *****
                            *****
                            ***** 
 */

/**
 * 1 - dado um n qualquer maior que 1
 * 2 - criar um laço de repetição para repetir n vezes a linha
 * 3 - criar um laço para repetir na coluna
 * 4 - imprimir na tela n vezes em n linhas o valor n em *
 */

const n = 5;
let aux = [];

if (n > 1) {
    for (let x = 0; x < n; x += 1) {
        //imprime a linha: como fazer pra não quebrar linha?
        for (let y = 0; y < n; y += 1) {
            //pegar o aux e de acordo com o n, multiplicar ele para mostrar uma string com um certo número de caracteres
            aux.push("*");   
        }       
        console.log(aux); 
        //zerar o array
    }
}


/**
 * if (n > 1) {
    for (let x = 0; x < n; x += 1) {         
        inputLine = inputLine + caractere;

    }
    for (let y = 0; y < n; y += 1) {
        console.log(inputLine);
        
    }    
}
 */