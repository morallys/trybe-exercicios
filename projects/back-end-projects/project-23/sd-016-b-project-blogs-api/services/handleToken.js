const jwt = require('jsonwebtoken');

const createToken = (body) => {
  //
  const { displayName, email } = body;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { data: { displayName, email } },
    process.env.JWT_SECRET,
    jwtConfig,
  );

  return token;
};

const validateToken = (email) => {
  //
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  createToken,
  validateToken,
};