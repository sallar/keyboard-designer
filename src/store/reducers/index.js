import { combineReducers } from 'redux';
import keys from './keys';
import rows from './rows';
import boards from './boards';
import keyboards from './keyboards';
import { LOAD_KEYBOARD } from '../types';

function result(state = null, action) {
  switch (action.type) {
    case LOAD_KEYBOARD: 
      return action.payload.result;
    default:
      return state;
  }
}

export default combineReducers({
  result,
  entities: combineReducers({
    keys,
    rows,
    boards,
    keyboards,
  })
});
