const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arrNames) => {
  // escreva seu código aqui
  const oneWord = arrNames.reduce((acc, name) => {
    return `${acc}${name}`;
  });

  const splitOneWord = oneWord.toLowerCase().split('');

  return splitOneWord.reduce((acc, char) => {
    if (char === 'a') {
      acc += 1;
    }
    return acc;
  }, 0);
}

console.log(`Quantidade de letras 'a' nos nomes: ${containsA(names)}`);