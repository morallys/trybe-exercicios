// NOTE - ordena o array em ordem crescente de acordo com a idade, e ordem decrescente a-b(crescente) e b-a(decrescente)

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

const sortPeople = (arr) => arr.sort((a, b) => b.age - a.age)

console.log(sortPeople(people));
