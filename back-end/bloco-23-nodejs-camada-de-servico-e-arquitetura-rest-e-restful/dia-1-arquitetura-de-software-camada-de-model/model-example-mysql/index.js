const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const authorsRouter = require('./router/authorsRouter');
const booksRouter = require('./router/booksRouter');

app.use('/authors', authorsRouter);
app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));