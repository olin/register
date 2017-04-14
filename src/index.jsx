import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import ProgressTrackerContainer from './containers/ProgressTrackerContainer';
import reducer from './reducers/ProgressTrackerReducer';
import createLogger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ProgressTrackerContainer />
  </Provider>,
  document.getElementById('container'),
);
