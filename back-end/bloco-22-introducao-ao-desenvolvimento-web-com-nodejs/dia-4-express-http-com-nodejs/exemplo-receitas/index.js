const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const recipesRoutes = require('./routes/Recipes');
const drinksRoutes = require('./routes/Drinks');

const app = express();

const APP_PORT = 3001;

// app.use(cors());
app.use(bodyParser.json());

// ---------- Recipes ----------

app.use(recipesRoutes);

// ---------- Drinks ----------

app.use(drinksRoutes);


// ---------- Mensagem padrão para as páginas not-found ----------

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

// ---------- Listen - Definição da porta para aplicação ----------

app.listen(APP_PORT, () => {
  console.log('Aplicação rodando na porta %s', APP_PORT);
});
