  const express = require('express');

const app = express(); // 1 -- Criar uma nova aplicação Express;

const APP_PORT = 3001;

const handleHelloWorldRequest = (_req, res) => {
  res.status(200).send('Hello World!!'); // 4 -- Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
};

app.get('/hello', handleHelloWorldRequest); // 2 -- Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada

app.listen(APP_PORT, () => {
  console.log('Aplicação rodando na porta %s', APP_PORT);
}); // 3 -- Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
