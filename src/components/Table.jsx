import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';
import NextPrev from './NextPrev';

function Table() {
  const {
    planets,
    searchPlanetName,
    filterByNumericValues,
    numFilterOn,
    tableLoading,
  } = useContext(PlanetsContext);

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
    tableLoading ? (<Loading />)
      : (
        <div>
          <NextPrev />
          <table className="ui selectable inverted table">
            <thead>
              <tr>
                { heads.map((title) => (
                  <th key={ title } className="center aligned">
                    { title }
                  </th>))}
              </tr>
            </thead>

            { numFilterOn
              ? (
                planets
                // FILTRO NUMERICO
                  .filter(
                    (planet) => {
                      switch (filterByNumericValues.comparison) {
                      case 'maior que':
                        return Number(planet[filterByNumericValues.column])
          > Number(filterByNumericValues.value);

                      case 'menor que':
                        return Number(planet[filterByNumericValues.column])
          < Number(filterByNumericValues.value);

                      case 'igual a':
                        return Number(planet[filterByNumericValues.column])
          === Number(filterByNumericValues.value);

                      default:
                        return undefined;
                      }
                    },
                  )
                  .map((planet) => (
                    <tbody key={ planet.name }>
                      <tr>
                        { tableList(planet) }
                      </tr>
                    </tbody>
                  )))
              : planets
              // FILTRO POR NOME DO PLANETA
                .filter((planet) => (
                  searchPlanetName
                    ? planet.name.toLowerCase().includes(searchPlanetName)
                    : true))
                .map((planet) => (
                  <tbody key={ planet.name }>
                    <tr>
                      { tableList(planet) }
                    </tr>
                  </tbody>
                ))}
          </table>
        </div>
      ));
}

export default Table;
