import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ProgressTrackerContainer from './containers/ProgressTrackerContainer';
import reducer from './reducers/reducers';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devTools),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ProgressTrackerContainer />
  </Provider>,
  document.getElementById('container'),
);
