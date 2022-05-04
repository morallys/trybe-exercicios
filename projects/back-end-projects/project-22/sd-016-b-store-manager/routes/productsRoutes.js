const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');
const { verifyName, verifyQuantity } = require('../middlewares/productsMiddleware');

router
  .get('/', productsController.getAll)
  .get('/:id', productsController.getById)
  .post('/', verifyName, verifyQuantity, productsController.addProduct)
  .put('/:id', verifyName, verifyQuantity, productsController.updateProduct)
  .delete('/:id', productsController.deleteProduct);

module.exports = router;
