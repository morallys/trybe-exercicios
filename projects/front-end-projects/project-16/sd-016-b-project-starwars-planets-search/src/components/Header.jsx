import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import '../css/Header.css';

function Header() {
  const {
    planets,
    filter,
    setFilter,
    setFilterPlanets,
  } = useContext(StarwarsContext);

  const handleChange = (e) => {
    setFilter({ ...filter, filterByName: { name: e.target.value } });

    const filterPlanets = planets.filter((planet) => (
      planet.name.includes(e.target.value)));

    if (e.target.value === '') {
      setFilterPlanets(planets);
    } else if (e.target.value.length >= 1) {
      setFilterPlanets(filterPlanets);
    }
  };

  return (
    <div className="div-header">
      <label htmlFor="find-planets">
        Procure por planetas
        <input
          type="text"
          name=""
          id="find-planets"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default Header;
