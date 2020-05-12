import React from 'react';
import { Link } from 'react-router-dom';
import { Default } from '~/layouts';
import { Masonry, MasonryItem, Card } from '~components';

const Home = () => {
  return (
    <Default>
      <Masonry>
        <MasonryItem>
          <Link to='/projects/1'>
            <Card />
          </Link>
        </MasonryItem>

        <MasonryItem>
          <Link to='/projects/2'>
            <Card />
          </Link>
        </MasonryItem>

        <MasonryItem>
          <Link to='/projects/3'>
            <Card />
          </Link>
        </MasonryItem>

        <MasonryItem>
          <Link to='/projects/4'>
            <Card />
          </Link>
        </MasonryItem>

        <MasonryItem>
          <Link to='/projects/5'>
            <Card />
          </Link>
        </MasonryItem>

        <MasonryItem>
          <Link to='/projects/6'>
            <Card />
          </Link>
        </MasonryItem>
      </Masonry>
    </Default>
  );
};

export default Home;
