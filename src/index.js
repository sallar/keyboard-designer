import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import keyboardApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(keyboardApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
