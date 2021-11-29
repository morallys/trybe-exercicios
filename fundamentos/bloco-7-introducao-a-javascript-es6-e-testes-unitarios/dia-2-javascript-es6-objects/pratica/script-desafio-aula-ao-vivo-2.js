// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

function buildCitiesArray(array) {
  // Seu código aqui

  // No primeiro índice do for, buscar os Values do objeto
  const arrayNewValues = [];

  for (let index = 0; index < array.length; index += 1) {
    const arrayValues = Object.values(array[index]);

    arrayNewValues.push(`${arrayValues[0]} - ${arrayValues[1]}`);
  }
  return arrayNewValues;
}

console.log(buildCitiesArray(citiesAndStates));