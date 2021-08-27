let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let aux = 0;

for (let index = numbers.length - 1; index > 0; index -= 1) {    
    for (let indexTwo = 0; indexTwo < index; indexTwo += 1) {
        if (numbers[indexTwo] < numbers[indexTwo + 1]) {
            aux = numbers[indexTwo];
            numbers[indexTwo] = numbers[indexTwo + 1];
            numbers[indexTwo + 1] = aux;

        }        
    }    
}
console.log("Array com ordenação crescente:", `${numbers}`);