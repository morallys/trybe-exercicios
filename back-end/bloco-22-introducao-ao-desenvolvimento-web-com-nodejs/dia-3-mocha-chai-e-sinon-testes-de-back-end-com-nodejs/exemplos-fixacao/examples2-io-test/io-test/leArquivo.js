const fs = require('fs');

const leArquivo = (arquivo) => {

  try {
    const conteudoDoArquivo = fs.readFileSync(arquivo, 'utf-8');

    return conteudoDoArquivo;

  } catch (err) {

    return null;
  }
}

module.exports = leArquivo;
