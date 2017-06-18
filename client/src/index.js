import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import './styles/index.css';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

//TODO: dodaj wielu dostawców, refaktoryzacja, RWD, nagłówki, ustaw inne tło, wyczyść formularz po skutecznym dodaniu, popraw error przy tworzeniu przesyłki o złym dostwacy
