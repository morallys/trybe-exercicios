const express = require('express');
const router = express.Router();

const data = require('../data/constants');
const compare = require('../services/compare');

router.get('/drinks', (_req, res) => {
  // res.json(data.drinks);

  const { drinks } = data;

  // const drinksOrder = drinks.sort(compare);

  res.send(drinks);
});

router.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { drinks } = data;

  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

router.post('/drinks', (req, res) => {

  const { drinks } = data;
  const { id, name, price, waitTime } = req.body;

  drinks.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Drink created successfully!' });
});

module.exports = router;
