import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

import Home from './views/Home';
import reducers from './redux/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Home />
  </Provider>,
  document.querySelector('#root'),
);
