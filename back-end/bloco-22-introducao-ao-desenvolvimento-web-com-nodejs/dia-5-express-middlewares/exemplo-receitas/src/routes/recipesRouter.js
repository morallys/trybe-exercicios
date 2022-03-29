const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const recipes = require('../data/database');

const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');

router.use(authMiddleware);

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});

router.get('/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.price < parseInt(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

// router.post('/', function (req, res) {
//   const { id, name, price, waitTime } = req.body;
//   recipes.push({ id, name, price, waitTime });
//   res.status(201).json({ message: 'Recipe created successfully!' });
// });

router.post('/', validateName, validatePrice, (req, res) => {
  //
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;

  recipes.push({ id, name, price, waitTime, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

router.put('/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;