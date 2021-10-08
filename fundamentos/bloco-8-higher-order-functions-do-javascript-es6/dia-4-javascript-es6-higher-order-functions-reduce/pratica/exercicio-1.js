// NOTE - 1 - Dada uma matriz, transforme em um array.
// NOTE - Transforma uma matriz em apenas um array com todos os elementos.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => {

  return arr.reduce((acc, currentValue) => acc.concat(currentValue), []);

}

console.log(flatten(arrays));
