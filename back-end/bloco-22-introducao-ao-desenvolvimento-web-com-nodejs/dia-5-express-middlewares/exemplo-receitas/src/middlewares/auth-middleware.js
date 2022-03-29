const validUser = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'juan', password: 'teste' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res
      .status(401)
      .json({ message: 'Nome de usuário e senha não podem ser vazios' });
  }

  const foundUser = validUser.find((user) => (user.username === username && user.password === password));

  if (!foundUser) return res.status(401).json({ message: 'Credenciais inválidas' })


  // if (!(username !== validUser.userName || password !== validUser.password)) {
  //   return res
  //     .status(401)
  //     .json({ message: 'Credenciais inválidas' });
  // }

  req.user = foundUser;

  next();
}

module.exports = authMiddleware;