const express = require('express');

const router = express.Router();

const categoriesController = require('../controller/categoriesController');
const { createCategory } = require('../middlewares/categoryMiddleware');
const auth = require('../middlewares/auth');

router
  .get('/', auth, categoriesController.getAll)
  .post('/', auth, createCategory, categoriesController.createCategory);

module.exports = router;