import React from 'react';

export default function TableHead() {
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
