import React from 'react';

import './style.css';

const Card = () => {
  return (
    <div className='m-card'>
      <div className='m-card__media'>
        {/* <img
          src='https://images.unsplash.com/photo-1588311066820-59642b203781?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          alt=''
        /> */}
      </div>
      <div className='m-card__body'>
        <h5 className='m-card__title'>Card</h5>
      </div>
    </div>
  );
};

export default Card;
