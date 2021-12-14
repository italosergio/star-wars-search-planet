import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import SearchPlanet from './components/SearchPlanet';

function App() {
  return (
    <PlanetsProvider>

      <h1 className="inverted transparent ui center aligned icon header">
        <i className="inverted circular fighter jet icon" />
        Star Wars
        <div className="sub header">Planet Search</div>
      </h1>

      <SearchPlanet />

      <Table />

    </PlanetsProvider>
  );
}

export default App;
