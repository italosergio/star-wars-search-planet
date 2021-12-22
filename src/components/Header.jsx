import React from 'react';
import '../App.css';

export default function Header() {
  return (
    <h1 className="inverted transparent ui center aligned icon header">
      <i className="inverted circular fighter jet icon rotate-icon" />
      Star Wars
      <div className="sub header">Planet Search</div>
    </h1>
  );
}
