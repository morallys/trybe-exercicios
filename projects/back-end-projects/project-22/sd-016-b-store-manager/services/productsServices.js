const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const getById = async (id) => {
  const productById = await productsModel.getById(id);

  if (productById.length === 0) throw new Error('Product not found');

  return productById;
};

const addProduct = async (name, quantity) => {
  const product = await productsModel.getByName(name);

  if (product.length !== 0) throw new Error('Product already exists');

  return productsModel.addProduct(name, quantity);
};

const updateProduct = async (id, name, quantity) => {
  const products = await productsModel.getById(id);

  if (products.length === 0) throw new Error('Product not found');

  return productsModel.updateProduct(id, name, quantity);
};

const deleteProduct = async (id) => {
  const products = await productsModel.getById(id);

  if (products.length === 0) throw new Error('Product not found');

  return productsModel.deleteProduct(id);
};

module.exports = {
  getAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
};
