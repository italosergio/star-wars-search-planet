import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);
  return (
    <ul>
      {planets.map((planet) => (
        <li key={ planet.name }>{planet.name}</li>
      ))}
    </ul>
  );
}

export default Table;
