const fs = require('fs').promises;

const nomeDoArquivo = './file_test_async_promises.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  })