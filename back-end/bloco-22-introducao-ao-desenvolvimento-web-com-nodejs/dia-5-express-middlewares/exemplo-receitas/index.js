const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authMiddleware = require('./src/middlewares/auth-middleware');
const recipesRouter = require('./src/routes/recipesRouter');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/open', function (req, res) {
  res.send('open!');
});

// app.use(authMiddleware);

app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
