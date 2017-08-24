import React from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  if(props.token) {
    return <Redirect to={`/${props.token}`} />;
  } else {
    return(
      <div className="introduction">
        <h1 className="main-header">Śledzenie przesyłek</h1>
        <p className="description">
          Aplikacja AliTracker służy do sprawnego zarządzania przesyłkami. Nie wymaga rejestracji ani logowania - wystarczy dodać stronę do zakładek lub zapamiętać otrzymany kod.
        </p>
        <ul className="introduction__features-list">
          <li className="introduction__feature">monitorowanie wszystkich przesyłek poprzez jeden krótki kod</li>
          <li className="introduction__feature">automatyczne wczytywanie danych przy ponownych odwiedzinach</li>
          <li className="introduction__feature">dostęp na wielu urządzeniach</li>
          <li className="introduction__feature">minimalizm i prostota</li>
          <li className="introduction__feature">brak rejestracji, pełna anonimowość</li>
        </ul>
        <span className="introduction__quickstart">Dodaj pierwszą przesyłkę, aby otrzymać swój nowy kod!</span>
      </div>
    );
  }
}
