
const checkLottery = (betNumber, aleatoryNumber) => {
  if (betNumber === aleatoryNumber) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

// REVIEW - Função que recebe um número apostado e gera um número aleatório da Loteria. Envia para checar os números em outra função para dar o resultado.

const lottery = (bet, callback) => {
  const aleatoryNumber = Math.floor(Math.random() * (6 - 1) + 1);

  return callback(bet, aleatoryNumber);
}

console.log(lottery(3, checkLottery));