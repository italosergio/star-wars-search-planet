import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, searchPlanetName, filterByNumericValues } = useContext(PlanetsContext);
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
          {
            heads.map((title) => (
              <th
                key={ title }
                className="center aligned"
              >
                {title}
              </th>
            ))
          }
        </tr>
      </thead>
      {
        planets
        // FILTRO POR NOME DO PLANETA
          .filter((planet) => (
            searchPlanetName
              ? planet.name.includes(searchPlanetName)
              : true))
        // FILTRO POR NUMERO DE HABITANTES
          // .filter((planet) => planet.population >= search)
          // .filter((planet) => {
          //   if()
          // })
          .map((planet) => (
            <tbody key={ planet.name }>
              <tr>
                {
                  tableList(planet)

                  // heads.map((title) => (
                  //   <th
                  //     key={ title }
                  //     className="center aligned"
                  //   >
                  //     {title}
                  //   </th>
                  // ))
                }
                {/* <td
                  key={ planet.name }
                  className="center aligned"
                >
                  {planet.name}
                </td>
                <td
                  key={ planet.rotation_period }
                  className="center aligned"
                >
                  {planet.rotation_period}
                </td>
                <td
                  key={ planet.orbital_period }
                  className="center aligned"
                >
                  {planet.orbital_period}
                </td>
                <td
                  key={ planet.diameter }
                  className="center aligned"
                >
                  {planet.diameter}
                </td>
                <td
                  key={ planet.climate }
                  className="center aligned"
                >
                  {planet.climate}
                </td>
                <td
                  key={ planet.gravity }
                  className="center aligned"
                >
                  {planet.gravity}
                </td>
                <td
                  key={ planet.terrain }
                  className="center aligned"
                >
                  {planet.terrain}
                </td>
                <td
                  key={ planet.surface_water }
                  className="center aligned"
                >
                  {planet.surface_water}
                </td>
                <td
                  key={ planet.population }
                  className="center aligned"
                >
                  {planet.population}
                </td>
                <td
                  key={ planet.residents }
                  className="center aligned"
                >
                  {planet.residents}
                </td>
                <td
                  key={ planet.created }
                  className="center aligned"
                >
                  {planet.created}
                </td>
                <td
                  key={ planet.edited }
                  className="center aligned"
                >
                  {planet.edited}
                </td>
                <td
                  key={ planet.url }
                  className="center aligned"
                >
                  {planet.url}
                </td> */}
              </tr>
            </tbody>
          ))
      }
    </table>
  );
}

export default Table;
