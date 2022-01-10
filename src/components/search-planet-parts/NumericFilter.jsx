import React from 'react';
import ColumnSelect from './ColumnSelect';
import ComparasionSelect from './ComparasionSelect';
import ValueInput from './ValueInput';
import ButtonFilter from './ButtonFilter';

export default function NumericFilter() {
  return (
    <section>
      <div className="ui input">
        <ColumnSelect />
        <ComparasionSelect />
        <ValueInput />
        <ButtonFilter />
      </div>
      <div className="ui large left pointing label black shake">
        Filtro Quantitativo
      </div>
      <br />
      <br />
    </section>
  );
}
