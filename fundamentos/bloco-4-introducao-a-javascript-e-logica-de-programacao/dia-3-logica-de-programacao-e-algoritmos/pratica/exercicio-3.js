/**
 * 3- Agora inverta o lado do triângulo. Por exemplo:

                n = 5

                    *
                   **
                  ***
                 ****
                *****
 */

let n = 5;
let line = ' ';
let character = '*';
let aux = 1;

if (n > 1) {
    for (let index = n; index > 0 ; index -= 1) {
        console.log(line.repeat(n), character.repeat(aux));
        aux +=1;
        n -= 1;
    }
}else {
    console.log("Valor inválido");
}


/**
 * Link método utilizado: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */