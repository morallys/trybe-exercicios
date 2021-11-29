
const sum = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const myRemove = (arr, item) => {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Questão 4
function letterA(text) {
  for (const key in text) {
    if (text[key] === 'a') {
      text[key] = 1;
    } else if (text[key] === '1') {
      text[key] = 'a';
    }
  }
  return text;
}
function letterE(text) {
  for (const key in text) {
    if (text[key] === 'e') {
      text[key] = 2;
    } else if (text[key] === '2') {
      text[key] = 'e';
    }
  }
  return text;
}
function letterI(text) {
  for (const key in text) {
    if (text[key] === 'i') {
      text[key] = 3;
    } else if (text[key] === '3') {
      text[key] = 'i';
    }
  }
  return text;
}
function letterO(text) {
  for (const key in text) {
    if (text[key] === 'o') {
      text[key] = 4;
    } else if (text[key] === '4') {
      text[key] = 'o';
    }
  }
  return text;
}
function letterU(text) {
  for (const key in text) {
    if (text[key] === 'u') {
      text[key] = 5;
    } else if (text[key] === '5') {
      text[key] = 'u';
    }
  }
  return text;
}
function encode(text) {
  let textSplit = text.split('');
  letterA(textSplit);
  letterE(textSplit);
  letterI(textSplit);
  letterO(textSplit);
  letterU(textSplit);

  return textSplit.join('');
}

function decode(text) {
  let textSplit = text.split('');
  letterA(textSplit);
  letterE(textSplit);
  letterI(textSplit);
  letterO(textSplit);
  letterU(textSplit);
  return textSplit.join('');
}

const techList = (arrTechs, nome) => {
  let newArrayObject = [];
  const arrOrder = arrTechs.sort();

  if (arrOrder.length === 0) {
    return 'Vazio!';
  } else {
    for (const object of arrOrder) {
      newArrayObject.push({
        tech: object,
        name: nome
      });
    }
    return newArrayObject;
  }
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList
};