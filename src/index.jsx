import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import App from './components/App';
import StudentHome from './components/StudentHome';
import reducer from './reducers/sampleReducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <StudentHome />
  </Provider>,
  document.getElementById('container'),
);
