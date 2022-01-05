import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchPlanetName, setSearchPlanetName] = useState('');
  const [numFilterOn, setNumFilterOn] = useState(false);
  const [tableLoading, setTableLoading] = useState(true);
  const [page, setPage] = useState('1');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const urlApi = `https://swapi-trybe.herokuapp.com/api/planets/?page=${page}`;
    setTableLoading(true);
    const fetchApi = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setPlanets(results);
    };
    const ONE_SEC = 1000;
    setInterval(() => setTableLoading(false), ONE_SEC);
    fetchApi();
  }, [page]);

  const state = {
    planets,
    searchPlanetName,
    setSearchPlanetName,
    filterByNumericValues,
    setFilterByNumericValues,
    numFilterOn,
    setNumFilterOn,
    tableLoading,
    setTableLoading,
    setPage,
    page,
  };

  return (
    <PlanetsContext.Provider value={ state }>{children}</PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
