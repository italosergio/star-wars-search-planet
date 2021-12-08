import React, { useContext } from 'react';
import './App.css';
import ISSContext from './context/ISSContext';

function App() {
  const { planets } = useContext(ISSContext);
  return (
    planets.map((planet) => (<li key={ planets.name }>{planet.name}</li>))
  );
}

export default App;
