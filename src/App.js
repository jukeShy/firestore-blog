import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import './style.css';

const App = () => {
  const routes = Routes(true);

  return (
    <Provider store={store}>
      <div id='webapp'>
        <BrowserRouter>{routes}</BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
