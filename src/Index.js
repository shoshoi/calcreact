import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);