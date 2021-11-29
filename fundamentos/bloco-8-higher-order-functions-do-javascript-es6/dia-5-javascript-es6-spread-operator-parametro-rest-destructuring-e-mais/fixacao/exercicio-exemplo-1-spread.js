// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'tangerina', 'maçã', 'ameixa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva passa', 'aveia', 'yogurt', 'castanha'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salad = [...fruit, ...additional];

  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));