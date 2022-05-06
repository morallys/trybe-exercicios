const express = require('express');

const productController = require('../controllers/productController')

const router = express.Router();

router
  .get('/', (req, res) => res.send('testando API pelo Heroku'))
  .post('/', productController.create);

module.exports = router;