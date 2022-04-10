const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());

const employeeController = require('../controllers/employeesController');

router
  .get('/', employeeController.getAll)
  .get('/:id', employeeController.getById)
  .get('/lazy/:id', employeeController.getByIdLazy)
  .post('/', employeeController.create);

module.exports = router;