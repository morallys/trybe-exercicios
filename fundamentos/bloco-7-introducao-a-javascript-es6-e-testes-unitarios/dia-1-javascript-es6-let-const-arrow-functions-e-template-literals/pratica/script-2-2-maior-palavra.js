// REVIEW - Encontra a maior palavra passada em uma string;

const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

// console.log(phrase[9].length);

const longestWord = (whichBiggestWord) => {
  const divPhrase = whichBiggestWord.split(' ');
  let wordBiggest = divPhrase[0];

  for (let index = 0; index < divPhrase.length; index += 1) {
    if (wordBiggest.length < divPhrase[index].length) {
      wordBiggest = divPhrase[index];
    }
  }
  return wordBiggest;
}

console.log(`'${longestWord(phrase)}'`);
