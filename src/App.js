import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import './style.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.user.uid);
  const routes = Routes(isAuthenticated);

  return (
    <div id='webapp'>
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
};

export default App;
