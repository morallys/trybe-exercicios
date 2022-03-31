function generateToken() {
  const result = Math.random().toString(36).substring(2, 11)
    + Math.random().toString(36).substring(2, 9);

  return { token: result };
}

module.exports = generateToken;

// NOTE - Ideia para criação da função geradora de string: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript?noredirect=1&lq=1

// Conjunto de funções retorna até no máximo 11 caracteres, por isso a necessidade de somar duas funções. 9 caracteres do primeiro conjunto mais 7 do segundo conjunto.
