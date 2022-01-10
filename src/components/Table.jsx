import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';
import NextPrev from './NextPrev';

function Table() {
  const {
    planets,
    searchPlanetName,
    numFilterOn,
    tableLoading,
    filterBackUp,
  } = useContext(PlanetsContext);

  const tableHeads = [
    'Name',
    'Rotation Period (h)',
    'Orbital Period (d)',
    'Diameter (m)',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water (%)',
    'Population',
    'Films',
    'Created',
    'Edited',
    'url',
  ];

  function nameFilter() {
    const filtered = (planet) => planet.name.toLowerCase().includes(searchPlanetName.toLowerCase());

    return planets.filter((planet) => (
      searchPlanetName ? filtered(planet) : true
    ));
  }

  function numericFilter() {
    const filtrado = filterBackUp.reduce((acc, crr) => acc.filter((planet) => {
      const comparasionMore = Number(planet[crr.column]) > Number(crr.value);
      const comparasionLess = Number(planet[crr.column]) < Number(crr.value);
      const comparasionEqual = Number(planet[crr.column]) === Number(crr.value);

      switch (crr.comparison) {
      case 'menor que':
        return comparasionLess;
      case 'igual a':
        return comparasionEqual;
      default:
        return comparasionMore;
      }
    }), planets);

    return filtrado;
  }

  function tableHead() {
    return (
      <thead>
        <tr>
          { tableHeads.map((title) => (
            <th key={ title } className="center aligned">
              { title }
            </th>))}
        </tr>
      </thead>
    );
  }

  function tableRows(planet) {
    return Object.keys(planet)
      .map((column) => column !== 'residents'
        && (
          <td
            key={ column }
            className="center aligned"
          >
            {typeof planet[column] !== 'object'
              ? planet[column]
              : planet[column].length}
          </td>
        ));
  }

  function tableBody() {
    return (
      <tbody>
        { (numFilterOn ? numericFilter() : nameFilter())
          .map((planet) => (
            <tr key={ planet.name }>
              { tableRows(planet) }
            </tr>
          ))}
      </tbody>
    );
  }

  function dinamicTable() {
    return (
      <div>
        <NextPrev />
        <table className="ui selectable inverted table">
          {tableHead()}
          {tableBody()}
        </table>
      </div>
    );
  }

  return tableLoading ? <Loading /> : dinamicTable();
}

export default Table;
