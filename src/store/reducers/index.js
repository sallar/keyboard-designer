import { combineReducers } from 'redux';

const SELECT_KEYBOARD = 'SELECT_KEYBOARD';

function result(state = null, action) {
  switch (action.type) {
    case SELECT_KEYBOARD: 
      return action.payload;
    default:
      return state;
  }
}

function entities(state = {}, action) {
  return state;
}

export default combineReducers({
  result,
  entities
});
