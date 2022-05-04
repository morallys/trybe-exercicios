const express = require('express');

const router = express.Router();

const loginController = require('../controller/loginController');
const { checkEmail, checkPassword } = require('../middlewares/loginMiddleware');

router
  .post('/', checkEmail, checkPassword, loginController.access);

module.exports = router;