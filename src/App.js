import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <h1>STAR WARS</h1>
      <h4>Planet Search</h4>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
