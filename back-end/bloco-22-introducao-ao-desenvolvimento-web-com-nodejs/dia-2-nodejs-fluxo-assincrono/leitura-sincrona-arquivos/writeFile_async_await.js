const fs = require('fs').promises;

const text = 'Inserindo texto no texto com async/await';

const main = async () => {
  try {
    await fs.writeFile('./file_test_async_write.txt', text);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {

    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();