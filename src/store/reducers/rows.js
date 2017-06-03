import { LOAD_KEYBOARD } from '../types';

export default function rows(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.rows;
    default:
      return state;
  }
}
