const express = require('express');

const salesController = require('../controllers/salesController');
const {
  verifyProductId,
  verifyQuantity,
} = require('../middlewares/salesMiddleware');

const router = express.Router();

router
  .get('/', salesController.getAll)
  .get('/:id', salesController.getById)
  .post('/', verifyProductId, verifyQuantity, salesController.addSales)
  .put('/:id', verifyProductId, verifyQuantity, salesController.updatedSales)
  .delete('/:id', salesController.deleteSales);

module.exports = router;