const userModel = require('./userModel');

const getUserMiddleware = (req, res, next) => {
  const { userName } = req.body;

  try {
    const user = await userModel.getUser(userName);

    if (!user) return res.status(404).json({ message: 'User não encontrado'});

    return res.status(200).json(user);

  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado :(' });
  }
}