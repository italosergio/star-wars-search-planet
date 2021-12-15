import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchPlanet() {
  const {
    setSearchPlanetName,
    searchPlanetName,
    setFilterByNumericValues,
    filterByNumericValues,
    setNumFilterOn,
    numFilterOn,
  } = useContext(PlanetsContext);

  return (
    <section>
      <label htmlFor="name-search">
        <div className="ui input">
          <input
            id="name-search"
            type="text"
            placeholder="Digite aqui..."
            data-testid="name-filter"
            value={ searchPlanetName }
            onChange={ ({ target: { value } }) => setSearchPlanetName(value) }
          />
        </div>
        <div className="ui large left pointing label">
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
            {(!numFilterOn && filterByNumericValues.column === 'population')
            && <option>population</option>}
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
            value={ filterByNumericValues.value }
            onChange={ ({ target: { value } }) => setFilterByNumericValues(
              (prevState) => ({ ...prevState, value }),
            ) }
          />

          {!numFilterOn && (
            <button
              type="button"
              data-testid="button-filter"
              onClick={ () => setNumFilterOn(true) }
              className="ui black icon button"
            >
              <i className="inverted search icon" />
            </button>)}

          {numFilterOn && (
            <button
              type="button"
              onClick={ () => setNumFilterOn(false) }
              className="ui black icon button"
            >
              <i className="inverted close icon" />
            </button>)}
        </div>
        <div className="ui large left pointing label">
          Filtro Quantitativo
        </div>
      </label>
      <br />
      <br />
      {numFilterOn && (
        <a
          href="/"
          className="ui black tag label"
        >
          {`${filterByNumericValues.column} 
        ${filterByNumericValues.comparison} 
        ${filterByNumericValues.value}`}

        </a>)}
    </section>
  );
}
