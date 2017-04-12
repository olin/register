import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/reducers';
import thunk from 'redux-thunk';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devTools)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
