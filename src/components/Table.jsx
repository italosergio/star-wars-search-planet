import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';
import Loading from './Loading';
import DinamicTable from './table-parts/DinamicTable';

function Table() {
  const { tableLoading } = useContext(PlanetContext);
  return tableLoading ? <Loading /> : <DinamicTable />;
}

export default Table;
