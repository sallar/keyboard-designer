import { LOAD_KEYBOARD } from '../types';

export default function keys(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.keys;
    default:
      return state;
  }
}
