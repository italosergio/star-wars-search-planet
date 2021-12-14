import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchPlanet() {
  const {
    setSearchPlanetName,
    searchPlanetName,
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(PlanetsContext);

  const onSubmit = () => {

  };

  return (
    <section>
      <label htmlFor="name-search">
        <div className="ui action input">
          <input
            id="name-search"
            type="text"
            placeholder="Digite aqui..."
            data-testid="name-filter"
            value={ searchPlanetName }
            onChange={ ({ target: { value } }) => setSearchPlanetName(value) }
          />
          <div className="ui left pointing label">
            Filtro Nome do Planeta
          </div>
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
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>

          <select
            className="ui dropdown"
            data-testid="comparison-filter"
            id="comparison-filter"
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

          <button
            type="button"
            data-testid="button-filter"
            onSubmit={ onSubmit }
            className="ui icon button"
          >
            <i className="search icon" />
          </button>
          <div className="ui left pointing label">
            Filtro Quantitativo
          </div>
        </div>
      </label>

      <br />
      <br />
    </section>
  );
}
