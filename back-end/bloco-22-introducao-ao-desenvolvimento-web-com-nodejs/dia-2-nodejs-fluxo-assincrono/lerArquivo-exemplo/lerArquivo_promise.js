const fs = require('fs');

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {

    fs.readFile(filename, (err, content) => {
      if (err) return reject(new Error ('Arquivo não encontrado ou Leitura não possibilitada'));

      resolve(content);
    });
  });
};

readFilePromise('./arquivo_test.txt')
  .then((result) => console.log(
    `Lido arquivo com ${result.byteLength} bytes.
Conteúdo:
  ${result}`
  ))
  .catch((err) => console.log(err.message));