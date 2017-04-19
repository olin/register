import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import App from './components/App';
import reducer from './reducers/AccountPageReducer';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  compose(
    devTools(),
    autoRehydrate(),
  ),
);
/* eslint-enable */

persistStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
