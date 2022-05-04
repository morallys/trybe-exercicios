const productServices = require('../services/productsServices');

const getAll = async (_req, res) => {
  //
  try {
    const products = await productServices.getAll();
    return res.status(200).json(products);
    //
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  //
  try {
    const { id } = req.params;

    const product = await productServices.getById(id);

    return res.status(200).json(product[0]);
    //
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const addProduct = async (req, res) => {
  //
  try {
    const { name, quantity } = req.body;

    const product = await productServices.addProduct(name, quantity);

    return res.status(201).json(product);
  } catch (e) {
    return res.status(409).json({ message: e.message });
  }
};

const updateProduct = async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const product = await productServices.updateProduct(id, name, quantity);

    return res.status(200).json(product);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const deleteProduct = async (req, res) => {
  //
  try {
    const { id } = req.params;

    await productServices.deleteProduct(id);

    return res.status(204).end();
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};
