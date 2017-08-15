import React from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  if(props.token) {
    return <Redirect to={`/${props.token}`} />;
  } else {
    return(
      <div className="introduction">
        <h2 className="main-header">Śledzenie przesyłek</h2>
        <ul className="introduction__features-list">
          <li className="introduction__feature">aplikacja pakuje wszystkie numery przesyłek do jednego</li>
          <li className="introduction__feature">po dodaniu pierwszej przesyłki zostaje przypisany unikalny kod</li>
          <li className="introduction__feature">za jego pomocą można wczytać dane na dowolnym urządzeniu</li>
          <li className="introduction__feature">wystarczy wkleić powyżej lub bezpośrednio do adresu URL</li>
        </ul>
      </div>
    );
  }
}
