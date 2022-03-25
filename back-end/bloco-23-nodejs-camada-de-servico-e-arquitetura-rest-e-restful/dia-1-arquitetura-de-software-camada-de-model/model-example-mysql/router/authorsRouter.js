const express = require('express');

const router = express.Router();

const Author = require('../models/Author');

router.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found'});

  return res.status(200).json(author);
});

router.post('/', async (req, res) => {
  const { first_name, middle_name, last_name, birthday, nationality } = req.body;

  await Author.createAuthor(
    first_name,
    middle_name,
    last_name,
    birthday,
    nationality
  );

  return res.status(201).json({ message: 'Autor criado com sucesso! '});
});

module.exports = router;