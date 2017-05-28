import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import keyboardApp from './store/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { input } from './utils/normalize';
import def from './keyboard.json';

const store = createStore(keyboardApp, input(def));
console.log(store.getState());
store.subscribe(data => {
  console.log(data);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
