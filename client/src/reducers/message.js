import { THROW_ERROR, NO_ERROR } from '../actions';
const INITIAL_STATE = { error: null };

export default function message(state = INITIAL_STATE, action) {
 switch (action.type) {
   case THROW_ERROR:
    return action.payload;
   case NO_ERROR:
    return { ...state, error: null };
   default: return state;
 }
}
