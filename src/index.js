import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { loadKeyboard } from './store/actions/keyboard';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import def from './keyboard.json';

const store = configureStore();
store.dispatch(loadKeyboard(def));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
