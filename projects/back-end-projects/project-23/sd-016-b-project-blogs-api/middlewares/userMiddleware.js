const { validateEmail, validatePassword, validateDisplayName } = require('../services/validate');
const { User } = require('../models');

const verifyEmail = async (req, res, next) => {
  //
  const { email } = req.body;

  const validate = validateEmail(email);

  if (!validate.valid) { return res.status(400).json({ message: validate.message }); }

  const checkUser = await User.findOne({ where: { email } });

  if (checkUser) { return res.status(409).json({ message: 'User already registered' }); }

  next();
};

const verifyDisplayName = (req, res, next) => {
  //
  const { displayName } = req.body;

  const validate = validateDisplayName(displayName);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

const verifyPassword = (req, res, next) => {
  //
  const { password } = req.body;

  const validate = validatePassword(password);

  if (!validate.valid) return res.status(400).json({ message: validate.message });

  next();
};

module.exports = {
  verifyDisplayName,
  verifyEmail,
  verifyPassword,
};