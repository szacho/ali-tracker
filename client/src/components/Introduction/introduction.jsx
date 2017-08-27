import React from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  if(props.token) {
    return <Redirect to={`/${props.token}`} />;
  } else {
    return(
      <section className="main--content">
        <h1 className="main--header">Śledzenie przesyłek</h1>
        <p className="main--description">
          Aplikacja AliTracker służy do sprawnego zarządzania przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.
        </p>
        <ul className="features">
          <li className="features--item">monitorowanie wszystkich przesyłek poprzez jeden krótki kod</li>
          <li className="features--item">automatyczne wczytywanie danych przy ponownych odwiedzinach</li>
          <li className="features--item">dostęp na wielu urządzeniach</li>
          <li className="features--item">minimalizm i prostota</li>
          <li className="features--item">brak rejestracji, pełna anonimowość</li>
        </ul>
        <span className="main--quickstart">Dodaj pierwszą przesyłkę, aby otrzymać swój nowy kod!</span>
      </section>
    );
  }
}
