import { LOAD_KEYBOARD, MOVE_ROW } from '../types';
import arrayMove from 'array-move';

export default function boards(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.boards;
    case MOVE_ROW: {
      const { id, from, to } = action.payload;
      const rows = [...state[id].rows];

      return {
        ...state,
        [id]: {
          ...state[id],
          rows: arrayMove(rows, from, to)
        }
      };
    }
    default:
      return state;
  }
}
