import React from 'react';
import ReactDOM from 'react-dom';
import ISSProvider from './context/ISSProvider';
import App from './App';

ReactDOM.render(
  <ISSProvider>
    <App />
  </ISSProvider>,
  document.getElementById('root'),
);
