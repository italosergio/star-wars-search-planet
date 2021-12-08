import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchPlanetInput, setSearchPlanetsInput] = useState('');

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets';
  useEffect(() => {
    const fetchApi = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setPlanets(results);
    };
    fetchApi();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setSearchPlanetsInput(value);
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        searchPlanetInput,
        handleChange,
        setSearchPlanetsInput,
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
