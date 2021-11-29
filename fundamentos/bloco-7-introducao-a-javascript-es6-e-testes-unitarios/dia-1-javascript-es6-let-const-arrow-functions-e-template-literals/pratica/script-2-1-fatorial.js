// REVIEW - Código para definir o fatorial de um número;

const fat = (number) => {
  let numberFat = number;
  if (number < 0) {
    return "Número inválido";
  } else if (number === 0) {
    numberFat = 1;
  } else {
    for (let index = number; index > 1; index -= 1) {
      numberFat = numberFat * (index - 1);
    }
  }
  return numberFat;
}

console.log(fat(5));
