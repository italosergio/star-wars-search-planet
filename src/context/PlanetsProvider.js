import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchPlanetName, setSearchPlanetName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets';
  useEffect(() => {
    const fetchApi = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setPlanets(results);
    };
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        searchPlanetName,
        setSearchPlanetName,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
