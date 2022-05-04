const { Category } = require('../models');
const { validateCategory } = require('../services/validate');

const createCategory = async (req, res, next) => {
  //
  const { name } = req.body;

  const consult = validateCategory(name);

  if (!consult.valid) return res.status(400).json({ message: consult.message });

  const categoryExist = await Category.findOne({ where: { name } });

  if (categoryExist) return res.status(409).json({ message: 'Category already registered' });

  next();
};

module.exports = {
  createCategory,
};