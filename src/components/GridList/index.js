import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const GridList = ({ children }) => {
  return <div className='grid-list'>{children}</div>;
};

GridList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridList;
