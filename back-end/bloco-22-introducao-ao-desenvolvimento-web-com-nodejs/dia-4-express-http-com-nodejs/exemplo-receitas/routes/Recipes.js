const express = require('express');
const router = express.Router();

const data = require('../data/constants');
const compare = require('../services/compare');

router.get('/recipes', (_req, res) => {
  // res.json(data.recipes);

  const { recipes } = data;

  const recipesOrder = recipes.sort(compare);

  res.send(recipesOrder);
});

router.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const { recipes } = data;

  let filteredRecipes = '';

  if (name && maxPrice && minPrice) {
    filteredRecipes = recipes.filter(
      (r) =>
        r.name.includes(name) &&
        r.price < parseInt(maxPrice) &&
        r.price >= parseInt(minPrice)
    );
  } else if (name && !maxPrice && minPrice) {
    filteredRecipes = recipes.filter(
      (r) => r.name.includes(name) && r.price >= parseInt(minPrice)
    );
  } else if (name && maxPrice && !minPrice) {
    filteredRecipes = recipes.filter(
      (r) => r.name.includes(name) && r.price < parseInt(maxPrice)
    );
  } else if (name && !maxPrice && !minPrice) {
    filteredRecipes = recipes.filter((r) => r.name.includes(name));
  } else if (!name && maxPrice && minPrice) {
    filteredRecipes = recipes.filter(
      (r) => r.price >= parseInt(minPrice) && r.price < parseInt(maxPrice)
    );
  } else if (!name && (maxPrice || minPrice)) {
    if (minPrice) {
      filteredRecipes = recipes.filter(
        (r) => r.price >= parseInt(maxPrice || minPrice)
      );
    } else if (maxPrice) {
      filteredRecipes = recipes.filter(
        (r) => r.price < parseInt(maxPrice || minPrice)
      );
    }
  } else {
    filteredRecipes = recipes;
  }

  if (filteredRecipes.length === 0 && name !== '') {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  res.status(200).json(filteredRecipes);
});

router.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { recipes } = data;

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

// drinks.sort((a, b) => a[name].localeCompare(b[name], 'pt-BT', {ignorePunctuation: true}));
// LINK - https://stackoverflow.com/questions/58997585/localecompare-array-of-objects-sorting-not-working

router.post('/recipes', (req, res) => {

  const { recipes } = data;
  const { id, name, price, waitTime } = req.body;

  recipes.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const { recipes } = data;

  console.log(name, price, waitTime);

  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

router.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { recipes } = data;

  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30,
//     waitTime: 35
//   }),
// });