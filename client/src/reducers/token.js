import { CREATE_TOKEN, LOAD_TOKEN } from '../actions';
const INITIAL_STATE = {};

export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_TOKEN:
      const createdToken = action.payload;
      window.localStorage.setItem('token', JSON.stringify(createdToken.token));
      return createdToken;
    case LOAD_TOKEN:
      const token = action.payload;
      return token;
    default: return state;
 }
}
