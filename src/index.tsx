import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
