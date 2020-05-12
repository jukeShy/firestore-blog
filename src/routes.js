import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Register, Login } from '~pages';

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
      <Redirect to='/' />
    </Switch>
  );
};

export { Routes };
