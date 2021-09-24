/*O enunciado diz:
    Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

    let fruits = [3, 4, 10, 1, 12];*/

let fruits = [3, 4, 10, 1, 12];
let aux = 0;

for (let index = 0; index < fruits.length; index += 1) {
    aux = aux + fruits[index];
    
}

if (aux > 15) {
    console.log(aux);

}else {
    console.log("valor menor que 16");
}


