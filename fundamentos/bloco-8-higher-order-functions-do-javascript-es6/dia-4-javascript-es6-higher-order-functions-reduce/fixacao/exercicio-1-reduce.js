// NOTE - Verificar qual é o maior número

const numbers = [50, 85, -30, 3, 15];

const biggerNumber = numbers.reduce((acc, number) => number > acc ? number : acc, 100);

console.log(biggerNumber);