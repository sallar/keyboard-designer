import { combineReducers } from 'redux';

const ADD_ROW = 'ADD_ROW';

function rowsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ROW: 
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default combineReducers({
  rows: rowsReducer
});
