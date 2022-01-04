import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetsContext';

export default function SearchPlanet() {
  const {
    setSearchPlanetName,
    searchPlanetName,
    setFilterByNumericValues,
    filterByNumericValues,
    setNumFilterOn,
    numFilterOn,
    setTableLoading,
  } = useContext(PlanetContext);

  const [atributte] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [saveFilterCollumn, setSaveFilterCollumn] = useState('');

  return (
    <section>
      <label htmlFor="name-search">
        <div className="ui input">
          <input
            disabled={ numFilterOn }
            id="name-search"
            type="text"
            placeholder="Digite aqui..."
            data-testid="name-filter"
            value={ searchPlanetName }
            onChange={ ({ target: { value } }) => setSearchPlanetName(value) }
          />
        </div>
        <div className="ui large left pointing label black shake">
          Filtro Nome do Planeta
        </div>
      </label>

      <br />
      <br />

      <label htmlFor="value-filter">
        <div className="ui input">
          <select
            className="ui dropdown"
            data-testid="column-filter"
            id="column-filter"
            value={ filterByNumericValues.column }
            onChange={ ({ target: { value } }) => setFilterByNumericValues(
              (prevState) => ({ ...prevState, column: value }),
            ) }
          >
            {
              atributte.map((title) => (title !== saveFilterCollumn)
                && (
                  <option key={ title }>{title}</option>
                ))
            }
          </select>

          <select
            className="ui dropdown"
            data-testid="comparison-filter"
            id="comparison-filter"
            value={ filterByNumericValues.comparison }
            onChange={ ({ target: { value } }) => setFilterByNumericValues(
              (prevState) => ({ ...prevState, comparison: value }),
            ) }
          >
            <option>maior que</option>
            <option>igual a</option>
            <option>menor que</option>
          </select>

          <input
            data-testid="value-filter"
            id="value-filter"
            type="number"
            className="ui black input"
            value={ filterByNumericValues.value }
            onChange={ ({ target: { value } }) => setFilterByNumericValues(
              (prevState) => ({ ...prevState, value }),
            ) }
          />

          {!numFilterOn && (
            <button
              type="button"
              data-testid="button-filter"
              onClick={ () => {
                setTableLoading(true);
                setNumFilterOn(true);
                setSaveFilterCollumn(filterByNumericValues.column);
                const ONE_SEC = 1000;
                setInterval(() => setTableLoading(false), ONE_SEC);
              } }
              className="ui black icon button"
            >
              <i className="toggle off icon" />
            </button>)}

          {numFilterOn && (
            <button
              type="button"
              onClick={ () => {
                setTableLoading(true);
                setNumFilterOn(false);
                setSaveFilterCollumn('');
                const ONE_SEC = 1000;
                setInterval(() => setTableLoading(false), ONE_SEC);
              } }
              className="ui black icon button"
            >
              <i className="toggle on icon" />
            </button>)}
        </div>
        <div className="ui large left pointing label black shake">
          Filtro Quantitativo
        </div>
      </label>
      <br />
      <br />
      {numFilterOn && (
        <div>
          <a
            href="/"
            className="ui black tag label"
          >
            {`${filterByNumericValues.column} 
        ${filterByNumericValues.comparison} 
        ${filterByNumericValues.value}`}

          </a>
          <br />
          <br />
        </div>
      )}
    </section>
  );
}
