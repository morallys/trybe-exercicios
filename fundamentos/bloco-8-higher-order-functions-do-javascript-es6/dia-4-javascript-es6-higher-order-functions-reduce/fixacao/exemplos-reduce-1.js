// NOTE - Com o método reduce(), o array é reduzido em um único elemento no final. Abaixo, o array de 7 posições é alterado pelo callback (result+number), e somado índice a índice, até o length do array.

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// NOTE - mesmo exemplo acima de soma de números de um array, no entanto é inserido o segundo parâmetro da função reduce. Com isso é alterado o valor inicial (result, nesse caso) e a soma ao invés de começar do valor 32 (primeira posição), começará do valor 0. Caso seja passado outro número, 10 por exemplo, a soma começa de 10 + 32.

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113
