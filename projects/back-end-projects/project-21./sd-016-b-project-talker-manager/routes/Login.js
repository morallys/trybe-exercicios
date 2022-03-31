const express = require('express');

const router = express.Router();

const { validateEmail, validatePassword } = require('../services/Validate');
const generateToken = require('../services/GenerateToken');

router.post('/login', (req, res) => {
  //
  const { email, password } = req.body;

  const testEmail = validateEmail(email);
  const testPassword = validatePassword(password);

  if (!testEmail.valid) {
    return res.status(400).json({ message: testEmail.message });
  }

  if (!testPassword.valid) {
    return res.status(400).json({ message: testPassword.message });
  }

  return res.status(200).json(generateToken());
});

module.exports = router;
