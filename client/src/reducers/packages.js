import { ADD_PACKAGE, REMOVE_PACKAGE } from '../actions';
const INITIAL_STATE = [];

export default function packages(state = INITIAL_STATE, action) {
 switch (action.type) {
   case ADD_PACKAGE:
     const newPackage = action.payload;
     return [ ...state, newPackage ];
   case REMOVE_PACKAGE:
     const number = action.payload;
     return state.filter(p => { return p.number !== number });
   default: return state;
 }
}
