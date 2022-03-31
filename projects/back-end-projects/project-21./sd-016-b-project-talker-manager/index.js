const express = require('express');
const bodyParser = require('body-parser');

const speakersRouter = require('./routes/Talker');
const loginRouter = require('./routes/Login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(speakersRouter);

app.use(loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
