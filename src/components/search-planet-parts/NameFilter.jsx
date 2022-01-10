import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function NameFilter() {
  const {
    filterBackUp,
    searchPlanetName,
    setSearchPlanetName,
  } = useContext(PlanetContext);

  return (
    <label htmlFor="name-search">
      <div className="ui input">
        <input
          disabled={ filterBackUp.length }
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
