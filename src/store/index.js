import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import keyboardApp from './reducers';

export function configureStore() {
  return createStore(
    keyboardApp,
    applyMiddleware(logger)
  )
}
