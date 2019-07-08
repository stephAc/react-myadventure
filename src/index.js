import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './views/Home';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Home />
  </Provider>,
  document.querySelector('#root'),
);
