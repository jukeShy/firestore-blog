import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from './colors';
import './style.css';

const Card = ({ story: { title, body, image, user } }) => {
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
      <button className='btn btn-flat btn-favorite'>
        <i className='material-icons'>favorite</i>
      </button>
      <div className='m-card__body'>
        <h5 className='m-card__title'>{title}</h5>
        <Link to={`/profile/${user.uid}`}>{`Add by ${user.displayName}`}</Link>
      </div>
    </div>
  );
};

export default Card;
