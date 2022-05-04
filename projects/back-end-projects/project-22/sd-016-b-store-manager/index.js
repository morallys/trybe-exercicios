const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

require('dotenv').config();

const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

//

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);
