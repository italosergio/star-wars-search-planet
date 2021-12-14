import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, searchPlanetName } = useContext(PlanetsContext);
  const heads = [
    'Name',
    'Rotation Period (h)',
    'Orbital Period (d)',
    'Diameter (m)',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water (%)',
    'Population',
    'Residents',
    'Created',
    'Edited',
    'url',
  ];

  function tableList(planet) {
    const array = Object.keys(planet);
    const ret = array.map((element) => {
      if (element === 'films') {
        return null;
      }
      return (
        <td
          key={ planet[element] }
          className="center aligned"
        >
          {planet[element]}
        </td>
      );
    });
    return ret;
  }

  return (
    <table className="ui selectable inverted table">
      <thead>
        <tr>
          { heads.map((title) => (
            <th key={ title } className="center aligned">
              { title }
            </th>))}
        </tr>
      </thead>
      { planets
        // FILTRO POR NOME DO PLANETA
        .filter((planet) => (
          searchPlanetName
            ? planet.name.includes(searchPlanetName)
            : true))
        // FILTRO POR NUMERO DE HABITANTES
        .map((planet) => (
          <tbody key={ planet.name }>
            <tr>
              { tableList(planet) }
            </tr>
          </tbody>
        ))}
    </table>
  );
}

export default Table;
