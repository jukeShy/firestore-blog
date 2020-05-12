import React from 'react';
import { Default } from '~/layouts';
import { Card } from '~components';

const Favorites = () => {
  return (
    <Default>
      <h1>Favorites</h1>
      <div className='row'>
        <div className='col s4'>
          <Card />
        </div>
        <div className='col s4'>
          <Card />
        </div>
        <div className='col s4'>
          <Card />
        </div>
        <div className='col s4'>
          <Card />
        </div>
      </div>
    </Default>
  );
};

export default Favorites;
