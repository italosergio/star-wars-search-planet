import React, { useContext } from 'react';
import './App.css';
import ISSContext from './context/ISSContext';

function App() {
  const { name } = useContext(ISSContext);
  return (
    <span>{`Hello, ${name}!`}</span>
  );
}

export default App;
