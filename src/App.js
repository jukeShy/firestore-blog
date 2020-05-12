import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import { Header } from '~components';

const App = () => {
  const routes = Routes(true);

  return (
    <BrowserRouter>
      <Header />
      {routes}
    </BrowserRouter>
  );
};

export default App;
