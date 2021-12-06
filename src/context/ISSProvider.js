import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ISSContext from './ISSContext';

function ISSProvider({ children }) {
  const [state/* , setState */] = useState({ name: 'Ítalo' });

  return (
    <ISSContext.Provider value={ { ...state } }>
      {children}
    </ISSContext.Provider>
  );
}

ISSProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ISSProvider;
