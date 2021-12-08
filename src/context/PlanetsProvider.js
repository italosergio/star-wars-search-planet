// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function ISSProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets';
  useEffect(() => {
    const fetchApi = async () => {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setPlanets(results);
    };
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

// ISSProvider.propTypes = {
//   children: PropTypes.objectOf(PropTypes.string).isRequired,
// };

export default ISSProvider;
