// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// Components
import App from './components/App';

// Tests
import getItems from './actions/getItems.js';
window.store = store;
window.getItems = getItems;

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
