const express = require('express');
const router = express.Router();

const userBooksController = require('../controllers/userBooksController');

router
  .get('/:id', userBooksController.getById);

module.exports = router;