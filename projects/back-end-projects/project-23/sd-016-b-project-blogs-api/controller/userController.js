const { User } = require('../models');
const { createToken } = require('../services/handleToken');

const getAll = async (_req, res) => {
  //
  try {
    const response = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  //
  const { id } = req.params;

  try {
    const response = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!response) throw new Error();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ message: 'User does not exist' });
  }
};

const createUser = async (req, res) => {
  //
  try {
    const { displayName, email, password, image } = req.body;

    await User.create({ displayName, email, password, image });

    const token = createToken(req.body);

    return res.status(201).json({ token });
  } catch (error) {
    //
    return res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  //
  try {
    const { id } = req.user;

    await User.destroy({ where: { id } });

    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  createUser,
  deleteUser,
};