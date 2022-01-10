import React from 'react';
import FlagFilter from './search-planet-parts/FlagFilter';
import NameFilter from './search-planet-parts/NameFilter';
import NumericFilter from './search-planet-parts/NumericFilter';

export default function SearchPlanet() {
  return (
    <section>
      <NameFilter />
      <NumericFilter />
      <FlagFilter />
    </section>
  );
}
