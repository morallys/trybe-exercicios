const salesService = require('../services/salesServices');

const getAll = async (_req, res) => {
  //
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
    //
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  //
  try {
    const { id } = req.params;

    const sales = await salesService.getById(id);

    return res.status(200).json(sales);
    //
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const addSales = async (req, res) => {
  //
  try {
    const { body } = req;

    const sales = await salesService.addSales(body);

    return res.status(201).json(sales);
    //
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const updatedSales = async (req, res) => {
  //
  try {
    const { id } = req.params;
    const { body } = req;

    const sales = await salesService.updatedSales(id, body);
    return res.status(200).json(sales);
    //
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const deleteSales = async (req, res) => {
  //
  try {
    const { id } = req.params;

    await salesService.deleteSales(id);

    return res.status(204).end();
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  getById,
  addSales,
  updatedSales,
  deleteSales,
};
