import React, { useContext } from 'react';
import './App.css';
import PlanetsContext from './context/PlanetsContext';

function App() {
  const { planets } = useContext(PlanetsContext);
  return (
    <>
      <h1>STAR WARS</h1>
      <h4>Planet Search</h4>

      {planets.map((planet) => (
        <li key={ planet.name }>{planet.name}</li>
      ))}
    </>
  );
}

export default App;
