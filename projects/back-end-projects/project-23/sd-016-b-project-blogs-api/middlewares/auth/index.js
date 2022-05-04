const jwt = require('jsonwebtoken');

require('dotenv').config();

const { User } = require('../../models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    //
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { email: decoded.data } });

    req.user = user.dataValues;
    //
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};