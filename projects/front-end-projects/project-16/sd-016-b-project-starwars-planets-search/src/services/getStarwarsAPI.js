const linkAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getStarwarsAPI = () => {
  const starwarsAPI = fetch(linkAPI)
    .then((data) => data.json()
      .then((results) => results));

  return starwarsAPI;
};

export default getStarwarsAPI;
