import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);
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
  return (
    <table>
      <thead>
        <tr>
          {heads.map((title) => (
            <th key={ title }>{title}</th>
          ))}
        </tr>
      </thead>
      {planets.map((planet) => (
        <tbody key={ planet.name }q>
          <tr>
            <td key={ planet.name }>{planet.name}</td>
            <td key={ planet.rotation_period }>{planet.rotation_period}</td>
            <td key={ planet.orbital_period }>{planet.orbital_period}</td>
            <td key={ planet.diameter }>{planet.diameter}</td>
            <td key={ planet.climate }>{planet.climate}</td>
            <td key={ planet.gravity }>{planet.gravity}</td>
            <td key={ planet.terrain }>{planet.terrain}</td>
            <td key={ planet.surface_water }>{planet.surface_water}</td>
            <td key={ planet.population }>{planet.population}</td>
            <td key={ planet.residents }>{planet.residents}</td>
            <td key={ planet.created }>{planet.created}</td>
            <td key={ planet.edited }>{planet.edited}</td>
            <td key={ planet.url }>{planet.url}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
