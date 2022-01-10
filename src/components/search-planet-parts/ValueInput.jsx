import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function ValueInput() {
  const {
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(PlanetContext);

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
