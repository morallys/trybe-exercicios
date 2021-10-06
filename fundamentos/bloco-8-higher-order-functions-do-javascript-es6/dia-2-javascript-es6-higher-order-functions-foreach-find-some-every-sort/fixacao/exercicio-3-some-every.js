// NOTE - Usando some() verifica se existe um nome no array, igual ao passado por parâmetro

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name)

console.log(hasName(names, 'Ana'));

// NOTE - Verifica se no array todas as pessoas possuem idade maior ou igual ao parâmetro passado

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);

console.log(verifyAges(people, 18));