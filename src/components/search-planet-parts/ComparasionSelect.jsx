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
      <option value="maior que">more than</option>
      <option value="igual a">equal to</option>
      <option value="menor que">less than</option>
    </select>
  );
}
