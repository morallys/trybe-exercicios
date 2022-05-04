const { User } = require('../models');
const { validateEmail, validatePassword } = require('../services/validate');

const checkEmail = async (req, res, next) => {
  //
  const { email } = req.body;

  const validate = validateEmail(email);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  const checkUser = await User.findOne({ where: { email } });

  if (!checkUser) return res.status(400).json({ message: 'Invalid fields' });

  next();
};

const checkPassword = async (req, res, next) => {
  //
  const { password } = req.body;

  const validate = validatePassword(password);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

module.exports = {
  checkEmail,
  checkPassword,
};
