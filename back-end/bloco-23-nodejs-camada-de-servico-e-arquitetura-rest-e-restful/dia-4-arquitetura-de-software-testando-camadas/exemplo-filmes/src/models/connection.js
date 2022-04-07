const mysql = require('mysql2/promise');

const PORT = 3306;

const connection = mysql.createPool({
  host:'localhost',
  user: 'Juan',
  passwort: 'admin',
  database: 'model_example',
  port: PORT,
})

module.exports = connection;