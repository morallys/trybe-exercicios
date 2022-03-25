const mysql = require('mysql2/promise');

const PORT = 3307;

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  port: PORT,
  database: 'model_example',
});

module.exports = connection;