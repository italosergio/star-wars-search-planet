import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function TableBody() {
  const {
    planets,
    searchPlanetName,
    numFilterOn,
    filterBackUp,
  } = useContext(PlanetsContext);

  function nameFilterSolution() {
    function filtered(planet) {
      return planet.name.toLowerCase().includes(searchPlanetName.toLowerCase());
    }

    return planets.filter((planet) => (
      searchPlanetName ? filtered(planet) : true
    ));
  }

  function numericFilterSolution() {
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

  function tableRowsContent(planet) {
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

  return (
    <tbody>
      { (numFilterOn ? numericFilterSolution() : nameFilterSolution())
        .map((planet) => (
          <tr key={ planet.name }>
            { tableRowsContent(planet) }
          </tr>
        ))}
    </tbody>
  );
}
