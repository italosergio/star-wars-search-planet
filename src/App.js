import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import SearchPlanet from './components/SearchPlanet';

function App() {
  return (
    <PlanetsProvider>
      <h1>STAR WARS</h1>
      <h4>Planet Search</h4>
      <SearchPlanet />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
