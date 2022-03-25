const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );

  // console.table(result);

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );

  if (authors.length === 0) return null;

  return authors;
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName, birthday, nationality) => {
  await connection.execute(
    `INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
      VALUES (?, ?, ?, ?, ?)`,
    [firstName, middleName, lastName, birthday, nationality]
  );
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};