const db = require('./db');

const getUser = async (userName) => {
  return db.findOne({ userName })
    .then((result) => result || null);
};

module.exports = getUser;