/**
 * Qual valor adicionado na const n, para que o resultado final seja (55)?
 * 
 * a - 9
 * b - 10
 * c - 11
 */

const n = 9;

let resultado = 100;

for (let i = 0; i <= n; i += 1) {
    resultado -= i;
    
}

console.log(resultado);