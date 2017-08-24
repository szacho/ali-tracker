import React from 'react';

export default () => {
  return(
    <div className="information">
      <h1 className="main-header">Informacje</h1>
      <p className="description">Aplikacja AliTracker służy do sprawnego zarządzania przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.</p>
      <h2 className="information__todo-header">TODO:</h2>
      <ul className="information__todo-list information__todo-list--georgian">
        <li className="information__todo-item">obsługa wielu dostawców, kurierów</li>
        <li className="information__todo-item">statystyki skuteczności różnych kurierów i dostawców</li>
        <li className="information__todo-item">przypominanie o zbliżającym się deadline dla przesyłek z AliExpress</li>
      </ul>
      <span className="information__author">&copy;2017 Michał Szachniewicz (<a className="link--red" href="https://github.com/szacho/ali-tracker">github</a>)</span>
    </div>
  );
}
