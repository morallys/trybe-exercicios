const calcIMC = require('./services/imc');
const tabelaIMC = require('./services/tabela_imc');
const qualIMC = require('./services/whichIMC')

const main = () => {
  const resultIMC = qualIMC(calcIMC());

  tabelaIMC();

  console.log(resultIMC);
};

main();
