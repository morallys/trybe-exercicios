// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   author: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(property);
// // }

// console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// function showProperties(objeto) {
//   const arrayKey = Object.keys(objeto);
//
//   for (const key in arrayKey) {
//     console.log(`${arrayKey[key]}, Nível: ${objeto[arrayKey[key]]}`);
//   }
// }

// console.log('Estudante 1');
// showProperties(student1);

// console.log('\nEstudante 2');
// showProperties(student2);

const showProperties = (objeto) => {
  const arrayKey = Object.keys(objeto);
  const arrayValue = Object.values(objeto);

  for (const key in arrayKey) {
    console.log(`${arrayKey[key]}, Nível: ${arrayValue[key]}`);
  }
}

console.log('Estudante 1');
showProperties(student1);

console.log('\nEstudante 2');
showProperties(student2);