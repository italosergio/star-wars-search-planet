import React from 'react';
import '../App.css';

export default function Header() {
  function shakeControl() {
    const time = 2000;
    setInterval(() => {
      document.getElementById('credits').classList.add('shake-constant');
      setTimeout(() => document.getElementById('credits')
        .classList.remove('shake-constant'), 100);
    }, time);
  }
  shakeControl();

  return (
    <h1 className="inverted transparent ui center aligned icon header">
      <a href="https://github.com/italosergio" className="sub header shake" id="credits">A Trybe Project by @italosergio</a>
      <i className="circular fighter jet icon rotate-icon" />
      <div className="header h1 shake-little">STAR WARS</div>
      <div className="sub header shake-little">Planet Search</div>
    </h1>
  );
}
