const fs = require('fs').promises;

const pathFile = './file_test_async_write_com_parametro.txt';

const argTerminal = process.argv.slice(2);
const [text] = argTerminal;

// const readFile = async () => {
//   try {
//     const meuArquivo = await fs.readFile(pathFile, 'utf-8');

//     return meuArquivo;
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// };

fs.writeFile('./file_test_async_write_com_parametro.txt', text, { flag: 'a+' })
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.log(`Erro ao escrever o arquivo: ${err.message}`));

// const write = async (text) => {
//   const meuTexto = await readFile();

// };

