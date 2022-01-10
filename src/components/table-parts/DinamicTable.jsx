import React from 'react';
import NextPrev from './NextPrev';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function DinamicTable() {
  return (
    <div>
      <NextPrev />
      <table className="ui selectable inverted table">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
