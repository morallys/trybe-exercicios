// NOTE - Unir primeiro e segundo nome, da maneira tradicional com um for, e inserindo num novo array com map.

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// -------------MAP---------------

const personsM = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNamesM = personsM.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNamesM); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// NOTE - Transformar todos os números do array em negativo

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// NOTE - Unir dois arrays (produtos e preços) em um só, criando um novo array com objetos

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({[product]: listPrices[index]}));

const listProducts = updateProducts(products, prices)

console.log(listProducts);