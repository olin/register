import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Login from './components/Login';
import reducer from './reducers/sampleReducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('container'),
);
