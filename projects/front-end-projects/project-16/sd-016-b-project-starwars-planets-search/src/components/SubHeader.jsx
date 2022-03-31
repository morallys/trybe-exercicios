import React, { useState, useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import '../css/SubHeader.css';

const NUMERIC_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SubHeader() {
  const { filter, setFilter, planets, setFilterPlanets } = useContext(StarwarsContext);

  const [selectColumn, setSelectColumn] = useState('population');
  const [selectComparison, setSelectComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);
  const [numericOptions, setNumericOptions] = useState(NUMERIC_OPTIONS);

  const handleFilters = () => {
    switch (selectComparison) {
    case 'maior que':
      setFilterPlanets(
        planets.filter(
          (planet) => Number(planet[selectColumn]) > Number(inputValue),
        ),
      );
      break;

    case 'menor que':
      setFilterPlanets(
        planets.filter(
          (planet) => Number(planet[selectColumn]) < Number(inputValue),
        ),
      );
      break;

    case 'igual a':
      setFilterPlanets(
        planets.filter(
          (planet) => Number(planet[selectColumn]) === Number(inputValue),
        ),
      );
      break;

    default:
      break;
    }
  };

  const handleFields = () => {
    const numericValues = {
      column: selectColumn,
      comparison: selectComparison,
      value: inputValue,
    };

    setNumericOptions(numericOptions.filter((obj) => obj !== selectColumn));

    setFilter({
      ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, numericValues],
    });

    handleFilters();
  };

  const handleClear = () => {
    setFilterPlanets(planets);
    setSelectColumn('population');
    setSelectComparison('maior que');
    setInputValue(0);
    setNumericOptions(NUMERIC_OPTIONS);
  };

  return (
    <div className="div-subHeader">
      <label htmlFor="column">
        Selecione a coluna:
        <select
          name=""
          id="column"
          data-testid="column-filter"
          value={ selectColumn }
          onChange={ (e) => setSelectColumn(e.target.value) }
        >
          {numericOptions.map((opt) => (
            <option key={ opt } value={ opt }>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison">
        Comparação:
        <select
          name=""
          id="comparison"
          data-testid="comparison-filter"
          value={ selectComparison }
          onChange={ (e) => setSelectComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="inputValue">
        Tamanho da população:
        <input
          type="number"
          name=""
          id="inputValue"
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
          data-testid="value-filter"
        />
      </label>

      <button type="button" data-testid="button-filter" onClick={ handleFields }>
        Filtrar
      </button>

      <button type="button" onClick={ handleClear }>
        Resetar
      </button>
    </div>
  );
}

export default SubHeader;
