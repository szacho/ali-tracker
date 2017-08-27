import React from 'react';

export default () => {
  return(
    <section className="main--content">
      <h1 className="main--header">Informacje</h1>
      <p className="main--description">Aplikacja AliTracker służy do sprawnego zarządzania przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.</p>
      <h2 className="todo--header l-bold">TODO:</h2>
      <ul className="todo l-georgian-list">
        <li className="todo--item">obsługa wielu dostawców, kurierów</li>
        <li className="todo--item">statystyki wydajności różnych kurierów i dostawców</li>
        <li className="todo--item">przypominanie o zbliżającym się deadline dla przesyłek z AliExpress</li>
      </ul>
      <span className="main--author">&copy;2017 Michał Szachniewicz (<a className="l-red-link" href="https://github.com/szacho/ali-tracker">github</a>)</span>
    </section>
  );
}
