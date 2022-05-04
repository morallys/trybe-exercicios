const mysql = require('mysql2/promise');

const PORT = 3306;

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: PORT,
});

module.exports = connection;
