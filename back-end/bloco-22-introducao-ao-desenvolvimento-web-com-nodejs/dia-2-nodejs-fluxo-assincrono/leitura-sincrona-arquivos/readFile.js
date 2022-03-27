const fs = require('fs');

const nomeDoArquivo = './file_test_async.txt';

fs.readFile(nomeDoArquivo, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }

  console.log(`Conteúdo do arquivo:\n ${data}`);
});