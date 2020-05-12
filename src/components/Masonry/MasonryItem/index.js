import React from 'react';

const MasonryItem = ({ children }) => {
  return (
    <div className='masonry-item'>
      <h5>{children}</h5>
    </div>
  );
};

export default MasonryItem;
