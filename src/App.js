import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import SearchPlanet from './components/SearchPlanet';
import Header from './components/Header';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <SearchPlanet />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
