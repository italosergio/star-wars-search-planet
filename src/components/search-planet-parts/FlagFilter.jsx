import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function FlagFilter() {
  const {
    numFilterOn,
    filterBackUp,
    setFilterBackUp,
  } = useContext(PlanetContext);

  return (
    numFilterOn && (
      filterBackUp.map((filterElement) => (
        <div key={ filterElement.column }>
          <div
            className="ui black tag label"
            key={ filterElement.column }
            data-testid="filter"
          >
            {`${filterElement.column} 
            ${filterElement.comparison} 
            ${filterElement.value}  `}
            <button
              type="button"
              onClick={ () => setFilterBackUp(
                (prevState) => prevState
                  .filter((filter) => filter.column !== filterElement.column),
              ) }
            >
              X
            </button>
          </div>
          <br />
          <br />
        </div>
      ))
    )
  );
}
