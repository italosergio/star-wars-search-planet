import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetsContext';

export default function ButtonFilter() {
  const {
    setFilterByNumericValues,
    filterByNumericValues,
    loadingOneSecond,
    setNumFilterOn,
    setFilterBackUp,
    setSaveFilterCollumn,
  } = useContext(PlanetContext);

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => {
        loadingOneSecond();
        setNumFilterOn(true);
        setSaveFilterCollumn(filterByNumericValues.column);
        setFilterBackUp((prevState) => [...prevState, filterByNumericValues]);
        setFilterByNumericValues(
          (prevState) => ({ ...prevState, column: 'population' }),
        );
      } }
      className="ui black icon button"
    >
      <i className="plus square outline icon" />
    </button>
  );
}
