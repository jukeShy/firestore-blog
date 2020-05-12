import React from 'react';
import { Default } from '~/layouts';
import { Masonry, MasonryItem } from '~components';

const Home = () => {
  return (
    <Default>
      <Masonry>
        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>

        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>

        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>

        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>

        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>

        <MasonryItem>
          <h5>Masonry item</h5>
        </MasonryItem>
      </Masonry>
    </Default>
  );
};

export default Home;
