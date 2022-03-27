const fs = require('fs');

const nomeDoArquivo = 'file_test_sync.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf-8');

  console.log(data);
} catch (error) {

  console.log(`Erro ao ler o arquivo: ${error.path}`);
  console.log(error);
}