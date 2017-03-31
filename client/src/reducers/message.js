import { THROW_ERROR } from '../actions';
const INITIAL_STATE = { message: null, error: null };

export default function message(state = INITIAL_STATE, action) {
 switch (action.type) {
   case THROW_ERROR:
    return action.payload;
   default: return state;
 }
}
