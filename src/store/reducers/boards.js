import { LOAD_KEYBOARD, MOVE_ROW } from '../types';

export default function boards(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.boards;
    case MOVE_ROW:
      console.log(action.payload);
      return {};
    default:
      return state;
  }
}
