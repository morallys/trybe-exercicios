const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      s.date AS date,
      sp.product_id AS productId,
      sp.quantity AS quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    ORDER BY saleId, productId`,
  );

  return sales;
};

const getById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT
      s.date AS date,
      sp.product_id AS productId,
      sp.quantity AS quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE s.id = ?`,
    [id],
  );

  return sales;
};

const addSales = async (body) => {
  //
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');

  const promises = body.map(async (sale) => {
    const { productId, quantity } = sale;

    await connection.execute(`
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
      [insertId, productId, quantity]);
  });

  await Promise.all(promises);

  return { id: insertId, itemsSold: body };
};

const getSaleProductsById = async (id) => connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?',
    [id],
  );

const updatedSales = async (id, body) => {
  //
  const promises = body.map(async (sale) => {
    const { productId, quantity } = sale;

    await connection.execute(`
      UPDATE StoreManager.sales_products
      SET product_id = ?, quantity = ?
      WHERE sale_id = ? AND product_id = ?`,
      [productId, quantity, id, productId]);
  });

  await Promise.all(promises);

  return { saleId: id, itemUpdated: body };
};

const deleteSales = async (id) => {
  //
  await connection.execute('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
  await connection.execute('DELETE FROM StoreManager.sales_products WHERE sale_id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  addSales,
  getSaleProductsById,
  updatedSales,
  deleteSales,
};
