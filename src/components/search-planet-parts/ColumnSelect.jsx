import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function ComparasionSelect() {
  const {
    setFilterByNumericValues,
    filterByNumericValues,
    saveFilterCollumn,
  } = useContext(PlanetContext);

  const atributte = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

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
