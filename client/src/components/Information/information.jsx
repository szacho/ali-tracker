import React from 'react';
import './information.css';

export default () => {
  return(
    <div className="information">
      <h2 className="main-header">Informacje</h2>
      <p className="information__description">Aplikacja AliTracker służy do sprawnego zarządzania dostarczanymi przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.</p>
      <ul className="information__todo-list information__todo-list--georgian">
        TODO:
        <li className="information__todo-item">responsywność</li>
        <li className="information__todo-item">obsługa wielu dostawców, kurierów</li>
        <li className="information__todo-item">statystyki skuteczności różnych kurierów i dostawców</li>
        <li className="information__todo-item">przypominanie o zbliżającym się deadline dla przesyłek z AliExpress</li>
      </ul>
      <span className="information__author">&copy;2017 Michał Szachniewicz (<a className="link--red" href="https://github.com/szacho/ali-tracker">github</a>)</span>
    </div>
  );
}
