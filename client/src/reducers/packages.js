import { ADD_PACKAGE } from '../actions';
const INITIAL_STATE = [];

export default function packages(state = INITIAL_STATE, action) {
 switch (action.type) {
   case ADD_PACKAGE:
     const newPackage = action.payload;
     return [ ...state, newPackage ];
   default: return state;
 }
}
