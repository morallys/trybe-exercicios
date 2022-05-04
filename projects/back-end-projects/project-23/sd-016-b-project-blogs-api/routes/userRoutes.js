const express = require('express');

const userController = require('../controller/userController');
const {
  verifyEmail,
  verifyDisplayName,
  verifyPassword,
} = require('../middlewares/userMiddleware');
const auth = require('../middlewares/auth');

const router = express.Router();

router
  .get('/', auth, userController.getAll)
  .get('/:id', auth, userController.getById)
  .delete('/me', auth, userController.deleteUser)
  .post(
    '/',
    verifyEmail,
    verifyDisplayName,
    verifyPassword,
    userController.createUser,
  );

module.exports = router;