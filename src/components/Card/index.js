import React from 'react';

import { colors } from './colors';
import './style.css';

const Card = ({ card }) => {
  const rnd = Math.round(Math.random(0, colors.length) * colors.length);

  return (
    <div
      className='m-card'
      style={{
        backgroundColor: colors[rnd],
      }}
    >
      <div className='m-card__media'>
        <img
          src='https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt=''
        />
      </div>
      <div className='m-card__body'>
        <h5 className='m-card__title'>Card</h5>
      </div>
    </div>
  );
};

export default Card;
