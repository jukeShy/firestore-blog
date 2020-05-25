import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storyFetch } from './redux/actions/storyActions';
import { userLogout } from '~redux/actions/authActions';
import { auth } from '~firebase';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import './style.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) return dispatch(userLogout());

      console.log('Welcome');
      dispatch(storyFetch());
    });
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => state.auth.user.uid);
  const routes = Routes(isAuthenticated);

  return (
    <div id='webapp'>
      <BrowserRouter>{routes}</BrowserRouter>
    </div>
  );
};

export default App;
