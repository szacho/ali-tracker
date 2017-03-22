import { combineReducers } from 'redux';
import packages from './packages';
import token from './token';
import { reducer as form } from 'redux-form';

export default combineReducers({
  packages,
  token,
  form
});
