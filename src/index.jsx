import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import LoginLocal from './components/LoginLocal';
import reducer from './reducers/sampleReducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <LoginLocal />
  </Provider>,
  document.getElementById('container'),
);
