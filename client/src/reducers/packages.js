import { ADD_PACKAGE, REMOVE_PACKAGE, SIGN_OUT, RESET_PACKAGES } from '../actions';
const INITIAL_STATE = [];

export default function packages(state = INITIAL_STATE, action) {
 switch (action.type) {
   case ADD_PACKAGE:
     const newPackage = action.payload;
     if(state.find(pack => pack.token !== newPackage.token)) {
       return [ newPackage ];
     }
     if(state.find(pack => (pack.number === newPackage.number))) return state;
     else return [ newPackage, ...state ];
   case REMOVE_PACKAGE:
     const number = action.payload;
     return state.filter(p => { return p.number !== number });
   case RESET_PACKAGES:
     return INITIAL_STATE;
   case SIGN_OUT:
     return INITIAL_STATE;
   default: return state;
 }
}
