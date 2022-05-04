const { Category } = require('../models');

const getAll = async (req, res) => {
  //
  try {
    const response = await Category.findAll();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  //
  try {
    const { name } = req.body;

    const category = await Category.create({ name });

    return res.status(201).json(category.dataValues);
    //
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  createCategory,
};