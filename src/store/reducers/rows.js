import { LOAD_KEYBOARD, MOVE_KEY } from '../types';
import arrayMove from 'array-move';

export default function rows(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities.rows;
    case MOVE_KEY: {
      const { id, from, to } = action.payload;
      const keys = [...state[id].keys];

      return {
        ...state,
        [id]: {
          ...state[id],
          keys: arrayMove(keys, from, to)
        }
      };
    }
    default:
      return state;
  }
}
