import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getStarwarsAPI from '../services/getStarwarsAPI';
import StarwarsContext from './StarwarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: undefined,
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    (async () => {
      const { results } = await getStarwarsAPI();
      setPlanets(results);
      setFilterPlanets(results);
    })();
  }, []);

  const contextValue = {
    planets,
    filter,
    setFilter,
    filterPlanets,
    setFilterPlanets,
  };

  return (
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
