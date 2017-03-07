import { combineReducers } from 'redux';
import packages from './packages';
import { reducer as form } from 'redux-form';

export default combineReducers({
  packages,
  form
});
