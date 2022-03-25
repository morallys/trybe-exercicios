const connection = require('./connection');

const Author = require('../models/Author');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title FROM books'
  );

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT title FROM books WHERE author_id = ?', [id]
  );

  if (books.length === 0) throw new Error("Author's book not found");

  return books;
};

const getById = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title FROM books WHERE id = ?',
    [id]
  );

  if (books.length === 0) return null;

  return books;
};

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return { status: false, message: 'Dados inválidos'};
  if (!author_id || typeof author_id !== 'number') return { status: false, message: 'Dados inválidos' };

  const findAuthorById = await Author.findById(author_id);

  if (!author_id || !findAuthorById) return { status: false, message: 'Dados inválidos' };

  return { status: true };
};

const createBook = async (title, author_id) => {
  await connection.execute(
    `INSERT INTO books (title, author_id)
      VALUES (?, ?)`,
    [title, author_id]
  );
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  createBook,
};