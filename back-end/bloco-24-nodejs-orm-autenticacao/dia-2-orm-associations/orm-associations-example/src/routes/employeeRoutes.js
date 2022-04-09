const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeesController');

router
  .get('/', employeeController.getAll)
  .get('/:id', employeeController.getById)
  .get('/lazy/:id', employeeController.getByIdLazy);

module.exports = router;