import { LOAD_KEYBOARD } from '../types';

export default function keyboards(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.keyboards;
    default:
      return state;
  }
}
