const fs = require('fs').promises;

const text = 'Escrevendo de modo assíncrono com o writeFile do módulo fs.';

fs.writeFile('./file_test_async_write.txt', text)
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.log(`Erro ao escrever o arquivo: ${err.message}`));