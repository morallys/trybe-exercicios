const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const productRoutes = require('../routes/productRoutes');

app.use('/product', productRoutes);

// module.exports = app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Escutando a porta ${PORT}`));
