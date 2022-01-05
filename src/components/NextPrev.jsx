import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function NextPrev() {
  const {
    setPage,
    page,
  } = useContext(PlanetsContext);

  function renderPrevButton() {
    return (
      <button
        type="button"
        className="ui labeled icon button"
        onClick={ () => {
          const MIN_PAG = 1;
          if (Number(page) > MIN_PAG) {
            setPage((prevState) => (Number(prevState) - 1));
          }
        } }
      >
        <i className="left chevron icon" />
        Prev
      </button>
    );
  }

  function renderNextButton() {
    return (
      <button
        type="button"
        className="ui right labeled icon button"
        onClick={ () => {
          const MAX_PAG = 6;
          if (Number(page) < MAX_PAG) {
            setPage((prevState) => (Number(prevState) + 1));
          }
        } }
      >
        Next
        <i className="right chevron icon" />
      </button>
    );
  }

  return (
    <div className="ui mini inverted black buttons">
      {renderPrevButton()}
      {renderNextButton()}
    </div>
  );
}
