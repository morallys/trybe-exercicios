require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, // preencha com a senha do seu banco de dados, caso tenha
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false,
  },
};
