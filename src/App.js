import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import { Header } from '~components';

const App = () => {
  const routes = Routes(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
