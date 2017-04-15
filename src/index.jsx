import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import App from './containers/AppContainer';
import reducer from './reducers/reducers';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devTools,
    autoRehydrate(),
  ),
);

persistStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
