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

  const [saveFilterCollumn, setSaveFilterCollumn] = useState('');

  const atributte = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function renderNameFilter() {
    return (
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
        <br />
        <br />
      </label>
    );
  }

  function renderColumnFilterDropdown() {
    return (
      <select
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
    );
  }

  function renderComparisonFilterSelect() {
    return (
      <select
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
    );
  }

  function renderValueFilterInput() {
    return (
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
    );
  }

  function renderFilterButton() {
    return (
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setTableLoading(true);
          setNumFilterOn(!numFilterOn);
          setSaveFilterCollumn(!numFilterOn ? filterByNumericValues.column : '');
          const ONE_SEC = 1000;
          setInterval(() => setTableLoading(false), ONE_SEC);
        } }
        className="ui black icon button"
      >
        <i className={ `toggle ${numFilterOn ? 'on' : 'off'} icon` } />
      </button>
    );
  }

  function renderNumericFilter() {
    return (
      <label htmlFor="value-filter">
        <div className="ui input">
          {renderColumnFilterDropdown()}
          {renderComparisonFilterSelect()}
          {renderValueFilterInput()}
          {renderFilterButton()}
        </div>
        <div className="ui large left pointing label black shake">
          Filtro Quantitativo
        </div>
        <br />
        <br />
      </label>
    );
  }

  function filterFlag() {
    return (
      numFilterOn && (
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
      )
    );
  }

  return (
    <section>
      {renderNameFilter()}
      {renderNumericFilter()}
      {filterFlag()}
    </section>
  );
}
