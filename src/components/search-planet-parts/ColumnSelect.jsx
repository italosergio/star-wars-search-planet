import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function ComparasionSelect() {
  const {
    setFilterByNumericValues,
    filterByNumericValues,
    saveFilterCollumn,
  } = useContext(PlanetContext);

  const atributtes = [
    { value: 'population', label: 'Population' },
    { value: 'orbital_period', label: 'Orbital Period' },
    { value: 'diameter', label: 'Diameter' },
    { value: 'rotation_period', label: 'Rotation Period' },
    { value: 'surface_water', label: 'Surface Water' },
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
        atributtes.map((attribute) => (attribute.value !== saveFilterCollumn)
          && (
            <option key={ attribute.value } value= {attribute.value}>{attribute.label}</option>
          ))
      }
    </select>
  );
}
