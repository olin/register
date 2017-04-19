import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/AccountPageReducer';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  compose(
    devTools(),
  ),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
