const express = require('express');

const router = express.Router();
const { route } = require('./authorsRouter');

const Book = require('../models/Book');

router.get('/', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

router.get('/author/:id', async (req, res) => {
  const { id } = req.params;

  try {
  const authorByID = await Book.getByAuthorId(id);

  return res.status(200).json(authorByID);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const bookById = await Book.getById(id);

  if (!bookById) return res.status(404).json({ message: 'Book not found'});

  return res.status(200).json(bookById);
});

router.post('/', async (req, res) => {
  const { title, author_id } = req.body;

  const validBook = await Book.isValid(title, author_id);

  // console.log(title, author_id);

  // console.log(validBook.status);

  if (!validBook.status) return res.status(400).json({ message: validBook.message });

  await Book.createBook(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso' });
});

module.exports = router;
