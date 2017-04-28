import { ADD_PACKAGE, REMOVE_PACKAGE } from '../actions';
const INITIAL_STATE = [];

export default function packages(state = INITIAL_STATE, action) {
 switch (action.type) {
   case ADD_PACKAGE:
     const newPackage = action.payload;
     if(state.find(pack => pack.token !== newPackage.token)) {
       return [ newPackage ];
     }
     if(state.find(pack => (pack.number === newPackage.number))) return state;
     else return [ ...state, newPackage ];
   case REMOVE_PACKAGE:
     const number = action.payload;
     return state.filter(p => { return p.number !== number });
   default: return state;
 }
}
