// 9 -- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let boxNumber = [];
let boxDivision = []

for (let index = 0; index < 25; index += 1) {

    boxNumber.push(index+1);    
}

for (let index = 0; index < boxNumber.length; index += 1) {
    
    boxDivision.push(boxNumber[index] / 2);
    
}


console.log(boxDivision);