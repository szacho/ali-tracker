import { SET_TOKEN, GET_TOKEN, SIGN_OUT, REMOVE_PACKAGE } from '../actions';
const INITIAL_STATE = {};

export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TOKEN:
      const loadedToken = action.payload;
      window.localStorage.setItem('token', JSON.stringify(loadedToken.token));
      return loadedToken;
    case GET_TOKEN:
      const gotToken = action.payload;
      return { ...state, tokenShort: gotToken };
    case REMOVE_PACKAGE:
      const packages = state.packages.filter(p => p.packageNumber !== action.payload);
      return { ...state, packages };
    case SIGN_OUT:
      return INITIAL_STATE;
    default: return state;
 }
}
