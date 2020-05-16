import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const GridItem = ({ children }) => {
  return <div className='grid-item'>{children}</div>;
};

GridItem.propTypes = {
  children: PropTypes.object.isRequired,
};

export default GridItem;
