import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Hero = ({ image }) => {
  return (
    <div className='hero'>
      <img src={image} alt='' className='hero-image' />
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
};

export default Hero;
