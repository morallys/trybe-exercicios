// getData.js
const fetch = require('node-fetch');

const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';

const getSuperHero = () => {
  const result = fetch(url)
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');
  return result;
};

getSuperHero(); // Wonder Woman

module.exports = getSuperHero;