const { validateToken } = require('../services/handleToken');

const access = (req, res) => {
  try {
    const { email } = req.body;

    const token = validateToken(email);

    return res.status(200).json({ token });
  } catch (error) {
    //
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  access,
};
