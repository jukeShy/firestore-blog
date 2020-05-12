import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Home,
  Register,
  Login,
  Favorites,
  Project,
  Profile,
  Create,
} from '~pages';

const Routes = (isAuthenticated) => {
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Redirect to='/register' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/favorites' exact component={Favorites} />
      <Route path='/projects/:id' exact component={Project} />
      <Route path='/profile/:id' exact component={Profile} />
      <Route path='/create' exact component={Create} />
      <Redirect to='/' />
    </Switch>
  );
};

export { Routes };
