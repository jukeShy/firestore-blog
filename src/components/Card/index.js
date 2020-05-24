import React from 'react';

import { colors } from './colors';
import './style.css';

const Card = ({ story: { title, body, image } }) => {
  const rnd = Math.round(Math.random(0, colors.length) * colors.length);

  return (
    <div
      className='m-card'
      style={{
        backgroundColor: colors[rnd],
      }}
    >
      <div className='m-card__media'>
        {image.src && <img src={image.src} alt={title} />}
      </div>
      <div className='m-card__body'>
        <h5 className='m-card__title'>{title}</h5>
      </div>
    </div>
  );
};

export default Card;
