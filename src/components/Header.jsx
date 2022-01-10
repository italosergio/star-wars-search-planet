import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Header() {
  const [shakeConstant, setShakeConstant] = useState(false);
  useEffect(() => {
    let myShakeTimeInterval = null;
    let myShakeTimeOut = null;
    const TWO_SEC = 2000;
    const TIME_OUT = 200;
    myShakeTimeInterval = setInterval(() => {
      setShakeConstant(true);
      myShakeTimeOut = setTimeout(() => setShakeConstant(false), TIME_OUT);
    }, TWO_SEC);
    return () => {
      clearInterval(myShakeTimeOut);
      clearInterval(myShakeTimeInterval);
    };
  }, []);

  return (
    <h1 className="inverted transparent ui center aligned icon header">
      <a href="https://github.com/italosergio" className={ `sub header shake ${shakeConstant && 'shake-constant'}` }>A Trybe Project by italosergio</a>
      <i className="circular fighter jet icon rotate-icon" />
      <div className="header h1 shake-little">STAR WARS</div>
      <div className="sub header shake-little">Planet Search</div>
    </h1>
  );
}
