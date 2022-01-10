import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function ComparasionSelect() {
  const {
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(PlanetContext);

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
