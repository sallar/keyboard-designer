import { combineReducers } from 'redux';
import { LOAD_KEYBOARD } from '../types';

function result(state = null, action) {
  switch (action.type) {
    case LOAD_KEYBOARD: 
      return action.payload.result;
    default:
      return state;
  }
}

function entities(state = {}, action) {
  switch (action.type) {
    case LOAD_KEYBOARD:
      return action.payload.entities;
    default:
      return state;
  }
}

export default combineReducers({
  result,
  entities
});
