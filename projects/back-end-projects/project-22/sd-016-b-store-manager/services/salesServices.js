const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const getById = async (id) => {
  const saleId = await salesModel.getById(id);

  if (saleId.length === 0) throw new Error('Sale not found');

  return saleId;
};

const addSales = (body) => salesModel.addSales(body);

const updatedSales = async (id, body) => {
  const [findSale] = await salesModel.getSaleProductsById(id);

  if (findSale.length === 0) throw new Error('Sale not found');

  return salesModel.updatedSales(id, body);
};

const deleteSales = async (id) => {
  const [findSale] = await salesModel.getSaleProductsById(id);

  if (findSale.length === 0) throw new Error('Sale not found');

  return salesModel.deleteSales(id);
};

module.exports = {
  getAll,
  getById,
  addSales,
  updatedSales,
  deleteSales,
};
