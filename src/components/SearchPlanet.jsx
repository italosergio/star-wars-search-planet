import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchPlanet() {
  const { setSearchPlanetsInput, searchPlanetsInput } = useContext(PlanetsContext);

  function handleChange({ target: { value } }) {
    setSearchPlanetsInput(value);
  }

  return (
    <input
      type="text"
      placeholder="Digite o nome do planeta"
      data-testid="name-filter"
      value={ searchPlanetsInput }
      onChange={ handleChange }
    />
  );
}
