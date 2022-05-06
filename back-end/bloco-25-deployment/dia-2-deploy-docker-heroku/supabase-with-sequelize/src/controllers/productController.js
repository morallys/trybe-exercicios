const { Product } = require('../models');

const create = async (req, res) => {
  //
  try {
    const { name, description } = req.body;

    const product = await Product.create({ name, description });

    return res.status(201).json(product);
  } catch (error) {
    //
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  create,
}